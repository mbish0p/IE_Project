import React from 'react'
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/events'
import Event from './Event'
import axios from 'axios'
import moment from 'moment'
moment().format();

class Events extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            remindedEvents: [],
        }
        console.log(this.props)
    }

    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        axios({
            method: 'GET',
            url: 'https://ie2020.kisim.eu.org/api/reminders',
            headers: { Authorization: `Bearer ${jwt}` }
        }).then((response) => {
            console.log(response)
            let allRemindersID = []
            response.data.forEach((reminder) => {
                //allRemindersID.push(reminder.presentationId)
                allRemindersID.push({
                    id: reminder.id,
                    presentationId: reminder.presentationId
                })
            })
            console.log(allRemindersID)
            this.setState({
                remindedEvents: allRemindersID
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        const favEvents = []
        this.props.events.map((event, index) => {
            const isReminded = this.state.remindedEvents.find((reminder) => {
                return reminder.presentationId === event.id

            })
            if (isReminded) {
                favEvents.push(event)
                // const eventDate = new Date(event.date)
                // const eventTimestamp = eventDate.getTime()
                // const hour = moment(eventTimestamp).format("HH:mm")
                // return <Event
                //     key={index}
                //     id={event.id}
                //     hour={hour}
                //     title={event.title}
                //     filename={event.filename}
                //     authors={event.authors}
                //     reminder={isReminded ? true : false}
                //     reminderId={isReminded ? isReminded.id : undefined}
                // />
            }
        })
        return (
            <div>
                {
                    getVisibleEvents(this.props.buttonMode ? favEvents : this.props.events, this.props.filters).map((event, index) => {
                        const eventDate = new Date(event.date)
                        const eventTimestamp = eventDate.getTime()
                        const hour = moment(eventTimestamp).format("HH:mm")
                        //const isReminded = this.state.remindedEvents.includes(event.id)
                        const isReminded = this.state.remindedEvents.find((reminder) => {
                            return reminder.presentationId === event.id

                        })

                        return <Event
                            key={index}
                            id={event.id}
                            hour={hour}
                            title={event.title}
                            filename={event.filename}
                            authors={event.authors}
                            reminder={isReminded ? true : false}
                            reminderId={isReminded ? isReminded.id : undefined}
                        />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Events)