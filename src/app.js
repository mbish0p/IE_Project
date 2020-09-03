import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Routers from "./routers/routers";
import "normalize.css/normalize.css";
import "./styles/style.scss"
import { addEvent, addReminder, deleteReminder } from './redux/actions/eventsAction'
import { setTextFilter, sortByDayOfWeek, setStartDate, setEndDate, sortBySession } from './redux/actions/filtersActions'
import getVisibleEvents from './selectors/events'

const App = (
    <Provider store={store}>
        <Routers />
    </Provider>
);

// store.dispatch(addReminder({ id: 'sdfgsadhjkl' }))
// store.dispatch(deleteReminder({ id: 'sdfgsadhjkl' }))
//store.dispatch(setTextFilter({ text: 'Donald Trump' }))
// store.dispatch(setTextFilter({ text: '' }))
//store.dispatch(sortByDayOfWeek({ text: 'Thursday' }))
// store.dispatch(setStartDate({ timestamp: 170 }))
// store.dispatch(setEndDate({ timestamp: 1200 }))
// store.dispatch(setStartDate())
//store.dispatch(sortBySession({ text: 'Plenary' }))

store.subscribe(() => {

    const state = store.getState()
    //console.log(state)
    const visibleEvents = getVisibleEvents(state.events, state.filters)
    //console.log('1', visibleEvents)
})



ReactDOM.render(App, document.getElementById("app"));
