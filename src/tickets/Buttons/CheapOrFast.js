import  s from "./CheapOrFast.module.css"
import classNames from 'classnames'



const CheapOrFast = (props) => {
    console.log(props)
    const isCheapest = () => {
        
    }
    const isFastest = () => {
       
    }
    const isOpti = () => {

    }
    return (<div className={s.wrapper}>
        <div className={classNames(s.cheap, s.style)} onClick={isCheapest}>Самый дешевый</div>
        <div className={classNames(s.fast, s.style)} onClick={isFastest}>Самый быстрый</div>
        <div className={classNames(s.opti, s.style)} onClick={isOpti}>Оптимальный</div>
    </div>)

}

export default CheapOrFast