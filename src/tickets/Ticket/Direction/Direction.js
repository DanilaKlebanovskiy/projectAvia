import s from "./Direction.module.css";
import React from "react";



const Direction = (props) => {
    const parseDate = Date.parse(props.date)

    let Xmas95 = new Date(parseDate);
    let Xmasnext = new Date(parseDate + props.duration)
    console.log(Xmas95)
    console.log(Xmasnext)
    let hours = Xmas95.getHours();
    let minutes = Xmas95.getMinutes()
    // let nexthours =

    console.log(hours, minutes);

    return (<div className={s.wrapper}>
            <div className={s.depature}>
                <div>{props.origin}-{props.destination}</div>
                <div>{Xmas95.getHours()}:{Xmas95.getMinutes()} {Xmasnext.getHours()}:{Xmasnext.getMinutes()} </div>
            </div>
            <div className={s.travell}>
                <div>В ПУТИ</div>
                <div>{Math.floor(props.duration/60)} ч {props.duration % 60} м</div>
            </div>
            <div className={s.peresadka}>
                <div>{props.stops.length === 0 ? <div>прямой рейс</div> : <div>{props.stops.length} пересадки</div>}</div>
                <div>{props.stops.join(",")}</div>
            </div>
        </div>
    )
}

export default Direction