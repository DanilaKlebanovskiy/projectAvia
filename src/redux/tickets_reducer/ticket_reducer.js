import { ticketsApi } from "../../api/api";
import {filterTickets, sortTickets} from "../../utils/utils";

const SET_TICKETS = "SET_TICKETS"
const SORT_TICKETS = "SORT_TICKETS"
const FILTER_TICKETS = "FILTER_TICKETS"
const SET_FILTER_METHODS = "SET_FILTER_METHODS"



let initialState = {
    tickets: [],
    sortState : null,
    filteredTickets: [],
    filterMethod: [],
    ticketsToShow: []
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:

            return {
                ...state, tickets: [...action.ticketsMas], ticketsToShow: [...action.ticketsMas]
            }
        case SORT_TICKETS:
            const sortedTickets = sortTickets(state.ticketsToShow ,action.sortMethod)
            return {
                ...state, sortState : action.sortMethod, ticketsToShow: sortedTickets
            }
        case FILTER_TICKETS:
            const filteredTickets = filterTickets(state.tickets ,action.filterMethod)
            return {
                ...state, sortState : action.filterMethod, filteredTickets: filteredTickets
            }
        case SET_FILTER_METHODS:
            return {
                ...state, filterMethod: [...state.filterMethod, action.filterMethod]
            }
        default:
            return state;
    }
}

export const sortTicketsAC = (sortMethod) => ({ type: SORT_TICKETS,  sortMethod})
export const filterTicketsAC = (filterMethod) => ({ type: FILTER_TICKETS,  filterMethod})
export const setFilterMethodAC = (filterMethod) => ({type: SET_FILTER_METHODS, filterMethod})




export const TicketsActionCreator = (ticketsMas) => ({ type: SET_TICKETS, ticketsMas })

export const ticketsThunk = () => {
    return async function test(dispatch) {
        try {
            const response = await ticketsApi.getSearch()
            const { data } = await ticketsApi.getTickets(response.data.searchId)
            dispatch(TicketsActionCreator(data.tickets))
        } catch (e) {
            if (e.message === "Request failed with status code 500")
                await test(dispatch)
        }
    }
}



export default TicketsReducer
