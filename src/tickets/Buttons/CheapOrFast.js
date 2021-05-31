import  s from "./CheapOrFast.module.css"
import classNames from 'classnames'
import {SORT_STATES} from "../../commons/constants"



const CheapOrFast = (props) => {

    return (<div className={s.wrapper}>
        <div className={classNames(s.cheap,{active : SORT_STATES.cheap === props.sortState}, s.style )} onClick={() => props.sortTickets(SORT_STATES.cheap)}>Самый дешевый</div>
        <div className={classNames(s.fast, s.style)} onClick={() => props.sortTickets(SORT_STATES.fast)}>Самый быстрый</div>
        <div className={classNames(s.opti, s.style)} onClick={() => props.sortTickets(SORT_STATES.optimal)}>Оптимальный</div>
    </div>)

}

export default CheapOrFast