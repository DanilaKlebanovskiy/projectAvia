import s from "./Sidebar.module.css"
import Test from "./checkbox/checkbox";

const Sidebar = () => {
    return(
        <div className={s.sidebar_area}>
            <div className={s.quantity}>Количество пересадок</div>
            <div><Test/></div>

        </div>
    )
}

export default Sidebar