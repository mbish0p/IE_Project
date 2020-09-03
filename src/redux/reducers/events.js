import { v4 as uuidv4 } from 'uuid';
// ADD_EVENT
const addEvent = (id = uuidv4(),
    title = '',
    authors = [],
    session = '',
    date = '',
    filename = '',
    keywords = [],
    reminder = false) => ({
        type: 'ADD_EVENT',
        event: {
            id,
            title,
            authors,
            session,
            date,
            filename,
            keywords,
            reminder
        }
    })

// ADD_REMINDER
const addReminder = ({ id }) => ({
    type: 'ADD_REMINDER',
    payload: {
        id
    }
})


// DELETE_REMINDER

const deleteReminder = ({ id }) => ({
    type: 'DELETE_REMINDER',
    payload: {
        id
    }
})

// SET_TEXT_FILTER

const setTextFilter = ({ text }) => ({
    type: 'SET_TEXT_FILTER',
    payload: {
        text
    }
})
// SORT_BY_DAY_OF_WEEK

const sortByDayOfWeek = ({ text }) => ({
    type: 'SORT_BY_DAY_OF_WEEK',
    payload: {
        text
    }
})

// SORT_BY_SESSION
const sortBySession = ({ text }) => ({
    type: 'SORT_BY_SESSION',
    payload: {
        text
    }
})

// SORT_BY_HOUR

const setStartDate = ({ timestamp }) => ({
    type: 'SET_START_DATE',
    payload: {
        timestamp
    }
})

const setEndDate = ({ timestamp }) => ({
    type: 'SET_END_DATE',
    payload: {
        timestamp
    }
})

// SORT_BY_REMINDERS

const eventsReducerDefaultState = []

const eventsReducer = (state = eventsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                action.event
            ]
        case 'ADD_REMINDER':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        reminder: true
                    }
                }
                return item
            })
        case 'DELETE_REMINDER':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        reminder: false
                    }
                }
                return item
            })
        default:
            return state
    }
}

export default eventsReducer