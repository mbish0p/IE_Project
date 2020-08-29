import React from 'react'
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/events'
import Event from './Event'
import moment from 'moment'
moment().format();

class Events extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    getVisibleEvents(this.props.events, this.props.filters).map((event, index) => {
                        const eventDate = new Date(event.date)
                        const eventTimestamp = eventDate.getTime()
                        const hour = moment(eventTimestamp).format("HH:mm")

                        return <Event key={index} hour={hour} title={event.title} />
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