import {applyMiddleware, combineReducers, createStore} from "redux";
import TicketsReducer from "./tickets_reducer/ticket_reducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    tickets : TicketsReducer,
    trata: "Taran"
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))
window.store = store
export default store





