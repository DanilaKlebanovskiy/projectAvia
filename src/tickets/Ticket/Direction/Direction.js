import s from "./Direction.module.css";
import React from "react";
import {formatTimeDuration, formatTimePeriod} from "../../../utils/FormatData";


const Direction = (props) => {


    return (<div className={s.wrapper}>
            <div className={s.depature}>
                <div>{props.origin}-{props.destination}</div>
                <div>{formatTimePeriod(props.date, props.duration)}</div>
            </div>
            <div className={s.travell}>
                <div>В ПУТИ</div>
                <div>{formatTimeDuration(props.duration)}</div>
            </div>
            <div className={s.peresadka}>
                <div>{props.stops.length === 0 ? <div>прямой рейс</div> :
                    <div>{props.stops.length} пересадки</div>}</div>
                <div>{props.stops.join(",")}</div>
            </div>
        </div>
    )
}

export default Direction