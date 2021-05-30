import s from "./Sidebar.module.css"
import Test from "./checkbox/checkbox";

const Sidebar = (props) => {
    console.log(props)
    return (
        <div className={s.sidebar_area}>
            <div className={s.quantity}>Количество пересадок</div>
            <div><Test {...props}/></div>
        </div>
    )
}

export default Sidebar