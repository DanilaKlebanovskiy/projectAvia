import s from "./Ticket.module.css"

let Ticket = () => {
    return (

            <div className={s.grid}>
                <div className={s.price}>13400</div>
                <div className={s.company}>company</div>
                <div className={s.depature}>
                    <div>MOW-HKT</div>
                    <div>10:45-08:00</div>

                </div>
                <div className={s.travell}>
                    <div>В ПУТИ</div>
                    <div>21ч 15м</div>
                </div>
                <div className={s.peresadka}>
                    <div>2 пересадки</div>
                    <div>HKG, JNB</div>
                </div>
                <div className={s.depatureback}>
                    <div>MOW-HKT</div>
                    <div>10:45-08:00</div>

                </div>
                <div className={s.travellback}>
                    <div>В ПУТИ</div>
                    <div>21ч 15м</div>
                </div>
                <div className={s.peresadkaback}>
                    <div>2 пересадки</div>
                    <div>HKG, JNB</div>
                </div>
            </div>

    )
}

export default Ticket