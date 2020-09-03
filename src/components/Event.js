import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios'
import { connect } from 'react-redux'
import { deleteReminder } from '../redux/actions/eventsAction';

const Event = (props) => {

    const [buttonMode, setButtonMode] = useState(false)

    useEffect(() => {
        setButtonMode(props.reminder)
    }, [props.reminder])

    const onClick = (event) => {

        setButtonMode(!buttonMode)
        const jwt = localStorage.getItem('jwt')
        if (!buttonMode) {
            axios({
                method: 'POST',
                url: 'https://ie2020.kisim.eu.org/api/reminders',
                data: {
                    presentationId: props.id,
                    enabled: true
                },
                headers: { Authorization: `Bearer ${jwt}` }
            }).then((response) => {
                console.log(response)
                props.addReminder(props.id)
            }).catch((error) => {
                console.log(error)
            })
        }
        else {
            axios({
                method: 'DELETE',
                url: `https://ie2020.kisim.eu.org/api/reminders/${props.reminderId}`,
                headers: { Authorization: `Bearer ${jwt}` }
            }).then((response) => {
                console.log(response)
                props.deleteReminder(props.id)
            }).catch((error) => {
                console.log(error)
            })
        }
    }


    const url = `https://m.kisim.eu.org/abstracts/${props.filename}`
    let authors = ''
    props.authors.forEach((author) => {
        authors += author + " "
    })
    return (
        <div className='event--container'>
            <p className='event--hour'>{props.hour}</p>
            <div className='event--data'>
                <a className='event--href' href={url} target="_blank">{props.title}</a>
                <p className='event--authors'>{authors}</p>
            </div>
            <div className='event--button-container'>
                <Fab className='event--reminder-button'
                    color={buttonMode ? "secondary" : 'default'}
                    aria-label="like"
                    onClick={onClick}>
                    <FavoriteIcon />
                </Fab>
            </div>

        </div>
    )

}


const mapDipsatchToProps = (dispatch) => {
    return {
        addReminder: (eventId) => dispatch({
            type: 'ADD_REMINDER',
            payload: {
                id: eventId
            }
        }),
        deleteReminder: (eventId) => dispatch({
            payload: {
                id: eventId
            }
        })

    }
}

export default connect(undefined, mapDipsatchToProps)(Event)