import CheapOrFast from "./Buttons/CheapOrFast";
import Ticket from "./Ticket/Ticket";
import s from "./Tickets.module.css"
import React from "react";

const Tickets = (props) => {
    console.log(props)
    return (
        <div className={s.tickets}>
            <CheapOrFast/>
            <Ticket />
        </div>
    )
}

export default Tickets