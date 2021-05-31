import {SORT_STATES,FILTER_STATES} from "../commons/constants"

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

export const filterTickets = (tickets, filterForm) => {
    const superTickets = []
    console.log(filterForm)
    for (let key in filterForm){

        if (filterForm[key] && key === "without") {

            const without = tickets.filter((ticket) => {
                return ticket.segments[0].stops.length + ticket.segments[1].stops.length === 0
            })
            superTickets.push(...without)
        }
        if (filterForm[key] && key === "oneTransfer") {

            const oneTransfer = tickets.filter((ticket) => {
                return ticket.segments[0].stops.length + ticket.segments[1].stops.length === 1
            })
            superTickets.push(...oneTransfer)
        }
        if (filterForm[key] && key === "twoTransfers") {

            const twoTransfers = tickets.filter((ticket) => {
                return ticket.segments[0].stops.length + ticket.segments[1].stops.length === 2
            })
            superTickets.push(...twoTransfers)
        }
        if (filterForm[key] && key === "threeTransfers") {

            const threeTransfers = tickets.filter((ticket) => {
                return ticket.segments[0].stops.length + ticket.segments[1].stops.length === 3
            })
            superTickets.push(...threeTransfers)
        }
    }

    return superTickets





    // const filteredTickets = tickets.map((ticket) => {
    //     if (filterForm === 0)
        // const transferAmount = ticket.segments[0].stops.length + ticket.segments[1].stops.length

    // oneTransfer = [...props.tickets].filter((ticket) => {
    //       return ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === count)
    //   })
}




