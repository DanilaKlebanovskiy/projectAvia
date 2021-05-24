import CheapOrFast from "./Buttons/CheapOrFast";
import Ticket from "./Ticket/Ticket";
import s from "./Tickets.module.css"

let Tickets = () => {
    return (
        <div className={s.tickets}>
            <CheapOrFast/>
            <Ticket/>
        </div>
    )
}

export default Tickets