const filtersReducerDefaultState = {
    text: '',
    dayInWeek: 'Monday',
    sessionType: '',
    sortBy: 'date',
    reminded: false,
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.payload.text
            }
        case 'SORT_BY_DAY_OF_WEEK':
            const daysOfWeek = {
                MONDAY: 'Monday',
                TUESDAY: 'Tuesday',
                WEDNESDAY: 'Wednesday',
                THURSDAY: 'Thursday',
                FRIDAY: 'Friday',
                SATURDAY: 'Saturday',
                SUNDAY: 'Sunday'
            }
            if (daysOfWeek.hasOwnProperty(action.payload.text.toUpperCase())) {
                return {
                    ...state,
                    dayInWeek: daysOfWeek[action.payload.text.toUpperCase()]
                }
            }
            else {
                return {
                    state
                }
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.payload.timestamp
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload.timestamp
            }
        case 'SORT_BY_SESSION':
            return {
                ...state,
                sessionType: action.payload.text
            }
        case 'DISPLAY_REMINDERS':
            return {
                ...state,
                dayInWeek: '',
            }
        case 'HIDE_REMINDERS':
            return {
                ...state,
                dayInWeek: 'Monday',
            }
        default:
            return state
    }
}

export default filtersReducer