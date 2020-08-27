export const addEvent = ({
    id = uuidv4(),
    title = '',
    authors = [],
    session = '',
    date = '',
    filename = '',
    keywords = [],
    reminder = false }) => ({
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

export const addReminder = ({ id }) => ({
    type: 'ADD_REMINDER',
    payload: {
        id
    }
})

export const deleteReminder = ({ id }) => ({
    type: 'DELETE_REMINDER',
    payload: {
        id
    }
})
