import  s from "./CheapOrFast.module.css"
import classNames from 'classnames'


const CheapOrFast = () => {
    return (<div className={s.wrapper}>
        <div className={classNames(s.cheap, s.style)}>Самый дешевый</div>
        <div className={classNames(s.fast, s.style)}>Самый быстрый</div>
        <div className={classNames(s.opti, s.style)}>Оптимальный</div>
    </div>)

}

export default CheapOrFast