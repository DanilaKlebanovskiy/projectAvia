import s from "./MoreTickets.module.css"

const MoreTickets = (props) => {

    return(
        <div>
            <div className={s.container} onClick={props.showMore}>Показать еще 5 билетов</div>
        </div>
    )
}

export default MoreTickets
