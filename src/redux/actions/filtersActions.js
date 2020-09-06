export const setTextFilter = ({ text }) => ({
    type: 'SET_TEXT_FILTER',
    payload: {
        text
    }
})

export const sortByDayOfWeek = ({ text }) => ({
    type: 'SORT_BY_DAY_OF_WEEK',
    payload: {
        text
    }
})

export const setStartDate = ({ timestamp } = {}) => ({
    type: 'SET_START_DATE',
    payload: {
        timestamp
    }
})

export const setEndDate = ({ timestamp } = {}) => ({
    type: 'SET_END_DATE',
    payload: {
        timestamp
    }
})

export const sortBySession = ({ text }) => ({
    type: 'SORT_BY_SESSION',
    payload: {
        text
    }
})

export const dispalyReminders = () => ({
    type: 'DISPLAY_REMINDERS'
})

export const hideReminders = () => ({
    type: 'HIDE_REMINDERS'
})