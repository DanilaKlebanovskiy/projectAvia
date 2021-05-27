import CheapOrFast from "./Buttons/CheapOrFast";
import Ticket from "./Ticket/Ticket";
import s from "./Tickets.module.css"
import React, {useEffect} from "react";
import {ticketsThunk} from "../redux/tickets_reducer/ticket_reducer";
import Direction from "./Ticket/Direction/Direction";

const Tickets = (props) => {
    let toggle = true;

    useEffect(() => { props.ticketsThunk() },[])

    const sliceMassiv = props.tickets.slice(0,5)
      const newTicket = [...sliceMassiv].map((element) =>  <Ticket carrier = {element.carrier}
                                                                price = {element.price}
                                                                segments = {element.segments}

                                                                /> )
    const cheapestTicket = [...props.tickets].sort((a,b) => a.price > b.price ? 1 : -1)
    console.log(cheapestTicket)
    let filter = (count) => {
        const oneTransfer = [...props.tickets].filter((ticket) => {return ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === count)})
        return oneTransfer
    }

    console.log(filter(0))

    // const oneTransfer = [...props.tickets].filter((ticket) => {return ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 1)})






    return (
        <div className={s.tickets}>
            <CheapOrFast/>
            <div>{newTicket}</div>
        </div>
    )
}

export default Tickets