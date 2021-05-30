import {SORT_STATES} from "../commons/constants"

export const sortTickets = (tickets, sortMethod) => {
    switch (sortMethod) {
        case (SORT_STATES.fast):
            return [...tickets].sort((a, b) => (a.segments[0].duration + a.segments[1].duration) > (b.segments[0].duration + b.segments[1].duration) ? 1 : -1)
        case (SORT_STATES.cheap):
            return [...tickets].sort((a, b) => a.price > b.price ? 1 : -1)
        default:
            return tickets
    }
}

export const filterTickets = (tickets, filterMethod) => {
    const filteredTickets = tickets.map((ticket) => {
        const transferAmount = ticket.segments[0].stops.length + ticket.segments[1].stops.length
    })
    // oneTransfer = [...props.tickets].filter((ticket) => {
    //       return ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === count)
    //   })
}



