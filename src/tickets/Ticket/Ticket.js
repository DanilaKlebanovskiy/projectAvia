import s from "./Ticket.module.css"
import Direction from "./Direction/Direction";
import React from "react";


const Ticket = (props) => {
    console.log(props.segments)
    const newSegments = [...props.segments].map((segm) => <Direction origin={segm.origin} date={segm.date}
                                                                     stops={segm.stops} destination={segm.destination} duration={segm.duration}/>)
    const imgCarrier = `http://pics.avs.io/99/36/%7B${props.carrier}%7D.png`
    return (
        <div className={s.tick}>
            <div className={s.grid}>
                <div className={s.price}>{props.price}</div>
                <div className={s.company}><img src={imgCarrier}></img></div>
            </div>
            <div>{newSegments}</div>
        </div>


    )
}

export default Ticket