import {ticketsApi} from "../../api/api";

const SET_TICKETS = "SET_TICKETS"

let initialState = {
    tickets : []
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS :
            return {
                ...state
            }
        default:
            return state;
    }
}

export const TicketsActionCreator = (tickets) => ({type: SET_TICKETS, tickets})


export const ticketsThunk = () => {
    return async (dispatch) => {
        try{
            const response  = await ticketsApi.getSearch()
            console.log(response.data.searchId)
            const {data} = await ticketsApi.getTickets(response.data.searchId)
        } catch(e) {
            await ticketsThunk()
        }


    }
}





// export const setTicketsActionCreator = (searchValue) => ({type: SET_TICKETS, searchValue})

export default TicketsReducer
