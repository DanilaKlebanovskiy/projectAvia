import {ticketsApi} from "../../api/api";

const SET_TICKETS = "SET_TICKETS"

let initialState = {
    tickets: [],
    fastest: [],
    cheapest:[],
    opti: []
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS :
            return {
                ...state, tickets: [...action.ticketsMas]
            }
        default:
            return state;
    }
}

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
