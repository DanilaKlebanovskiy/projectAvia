import {ticketsApi} from "../../api/api";
import {filterTickets, sortTickets} from "../../utils/utils";

const SET_TICKETS = "SET_TICKETS"
const SORT_TICKETS = "SORT_TICKETS"
const FILTER_TICKETS = "FILTER_TICKETS"
const SET_FILTER_METHODS = "SET_FILTER_METHODS"
const RESET_FILTERS = "RESET_FILTERS"


let initialState = {
    tickets: [],
    sortState: null,
    filterMethod: [],
    ticketsToShow: [],
    filterForm: {
        without: true,
        oneTransfer: true,
        twoTransfers: true,
        threeTransfers: true
    }
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state, tickets: [...action.ticketsMas], ticketsToShow: [...action.ticketsMas]
            }
        case SORT_TICKETS:
            const sortedTickets = sortTickets(state.ticketsToShow, action.sortMethod)
            return {
                ...state, sortState: action.sortMethod, ticketsToShow: sortedTickets
            }
        case FILTER_TICKETS:
            const filteredTickets = filterTickets(state.tickets, state.filterForm)
            return {
                ...state, ticketsToShow: filteredTickets
            }
        case SET_FILTER_METHODS:
            if (action.filterMethod === "all") {
                return {
                    ...state, filterForm: {
                        without: true,
                        oneTransfer: true,
                        twoTransfers: true,
                        threeTransfers: true
                    }
                }
            }
            return {
                ...state, filterForm: {...state.filterForm, [action.filterMethod]: !state.filterForm[action.filterMethod]}
            }
        case RESET_FILTERS:
            return {
                ...state, ticketsToShow: state.tickets
            }
        default:
            return state;
    }
}

export const sortTicketsAC = (sortMethod) => ({type: SORT_TICKETS, sortMethod})
export const filterTicketsAC = () => ({type: FILTER_TICKETS})
export const setFilterMethodAC = (filterMethod) => ({type: SET_FILTER_METHODS, filterMethod})
export const resetTicketsAC = () => ({type: RESET_FILTERS})


export const TicketsActionCreator = (ticketsMas) => ({type: SET_TICKETS, ticketsMas})

export const ticketsThunk = () => {
    return async function test(dispatch) {
        try {
            const response = await ticketsApi.getSearch()
            const {data} = await ticketsApi.getTickets(response.data.searchId)
            dispatch(TicketsActionCreator(data.tickets))
        } catch (e) {
            if (e.message === "Request failed with status code 500")
                await test(dispatch)
        }
    }
}


export default TicketsReducer
