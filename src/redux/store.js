import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user";
import eventsReducer from './reducers/events'
import filtersReducer from './reducers/filters'

const mainReducer = combineReducers({
    user: userReducer,
    events: eventsReducer,
    filters: filtersReducer
});

const store = createStore(mainReducer);

export default store;
