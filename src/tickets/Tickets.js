import CheapOrFast from "./Buttons/CheapOrFast";
import Ticket from "./Ticket/Ticket";
import s from "./Tickets.module.css"
import React, {useEffect, useState} from "react";
import MoreTickets from "./MoreTickets/MoreTickets";

const DELTA = 5;
const Tickets = (props) => {
    useEffect(() => {
        props.ticketsThunk()
    }, [])
    const [ticketsToShow, showMore] = useState(DELTA)

    const sliceArray = props.tickets.slice(0, ticketsToShow)
    const Tickets = [...sliceArray].map((element, id) => <Ticket key= {id} carrier={element.carrier}
                                                             price={element.price}
                                                             segments={element.segments}

    />)


    // const oneTransfer = [...props.tickets].filter((ticket) => {return ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 1)})


    return (
        <div className={s.tickets}>
            <CheapOrFast sortState={props.sortState} sortTickets={props.sortTickets}/>
            <div>{Tickets}</div>
            {!!props.tickets.length ? <MoreTickets showMore={() => showMore(ticketsToShow + DELTA)} /> : <div>Билетов нет</div> }
        </div>
    )
}

export default Tickets