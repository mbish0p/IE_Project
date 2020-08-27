import moment from 'moment'
moment().format();


const getVisibleEvents = (events, { text, dayInWeek, sessionType, startDate, endDate }) => {
    return events.filter((event) => {

        const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const eventDate = new Date(event.date)
        const eventTimestamp = eventDate.getTime()
        const weekDay = week[moment(eventTimestamp).isoWeekday() - 1]


        const weekDayMatch = (weekDay === dayInWeek)
        const startDateMatch = typeof startDate !== 'number' || eventTimestamp >= startDate
        const endDateMatch = typeof endDate !== 'number' || eventTimestamp <= endDate
        const sessionMatch = sessionType === '' || event.session.toLowerCase().includes(sessionType.toLowerCase())
        const textMatch = text === '' || event.title.toLowerCase().includes(text.toLowerCase()) ||
            event.authors.includes(text) || event.keywords.includes(text)

        return weekDayMatch && startDateMatch && endDateMatch && textMatch && sessionMatch
    }).sort((a, b) => {
        const aDate = new Date(a.date)
        const aTimestamp = aDate.getTime()

        const bDate = new Date(b.date)
        const bTimestamp = bDate.getTime()

        return (aTimestamp <= bTimestamp) ? 1 : -1
    })
}

export default getVisibleEvents