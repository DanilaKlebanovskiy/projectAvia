import { ticketsApi } from "../../api/api";

const SET_TICKETS = "SET_TICKETS"
const SET_FAST = "SET_FAST"
const SET_CHEAP = "SET_CHEAP"
const SET_OPTI = "SET_OPTI"


let initialState = {
    tickets: [],
    menu: ""
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state, tickets: [...action.ticketsMas]
            }
        case SET_FAST:
            return {
                ...state, menu : action.isFast
            }
        case SET_CHEAP:
            return {
                ...state
            }
        case SET_OPTI:
            return {
                ...state
            }

        default:
            return state;
    }
}

export const actionCreatorFastest = (isFast) => ({ type: SET_FAST, isFast })

export const actionCreatorCheapest = (isCheap) => ({ type: SET_CHEAP, isCheap })

export const actionCreatorOpti = (isOpti) => ({ type: SET_OPTI, isOpti })


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
