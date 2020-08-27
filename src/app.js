import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Routers from "./routers/routers";
import "normalize.css/normalize.css";
import "./styles/style.scss"
import { addEvent, addReminder, deleteReminder } from './redux/actions/eventsAction'
import { setTextFilter, sortByDayOfWeek, setStartDate, setEndDate, sortBySession } from './redux/actions/filtersActions'

const App = (
    <Provider store={store}>
        <Routers />
    </Provider>
);




store.dispatch(addEvent({
    id: 'sdfgsadhjkl',
    title: 'melanz2',
    authors: ['Mateusz Biskup']
}))

store.dispatch(addEvent({
    id: 'sdfghjkl',
    title: 'melanz',
    authors: ['Mateusz Biskup']
}))

// store.dispatch(addReminder({ id: 'sdfgsadhjkl' }))
// store.dispatch(deleteReminder({ id: 'sdfgsadhjkl' }))
// store.dispatch(setTextFilter({ text: 'computer' }))
// store.dispatch(setTextFilter({ text: '' }))
// store.dispatch(sortByDayOfWeek({ text: 'sunday' }))
// store.dispatch(setStartDate({ timestamp: 170 }))
// store.dispatch(setEndDate({ timestamp: 1200 }))
// store.dispatch(setStartDate())
// store.dispatch(sortBySession({ text: 'Plenner' }))

const getVisibleEvents = (events, { text, dayInWeek, sessionType, startDate, endDate }) => {

    return events
}

store.subscribe(() => {

    const state = store.getState()
    const visibleEvents = getVisibleEvents(state.events, state.filters)
    console.log(visibleEvents)
})

const date = new Date("2019-09-05T07:00:00.000Z")
const timestamp = date.getTime()
console.log(timestamp)

ReactDOM.render(App, document.getElementById("app"));
