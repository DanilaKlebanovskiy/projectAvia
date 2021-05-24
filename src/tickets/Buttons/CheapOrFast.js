import  s from "./CheapOrFast.module.css"


const CheapOrFast = () => {
    return (<div className={s.wrapper}>
        <div className={s.cheap}>Самый дешевый</div>
        <div className={s.fast}>Самый быстрый</div>
        <div className={s.opti}>Оптимальный</div>
    </div>)

}

export default CheapOrFast