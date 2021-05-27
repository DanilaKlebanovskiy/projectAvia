import {applyMiddleware, combineReducers, createStore} from "redux";
import TicketsReducer from "./tickets_reducer/ticket_reducer";
import thunkMiddleware from 'redux-thunk'
import React from "react";

const reducers = combineReducers({
    tickets : TicketsReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))
window.store = store
export default store





