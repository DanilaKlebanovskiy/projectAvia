import './App.css';

import logPic from "../src/img/logo.svg"
import TicketsContainer from "./tickets/TicketsContainer";
import {Provider} from "react-redux";
import store from "../src/redux/reduxStore"
import SidebarContainer from "./Sidebar/SidebarContainer";

function App() {

    return (
        <Provider store={store}>
            <div className="page">
                <div className="container">
                    <div className="logo"><img className="picture" src={logPic}/></div>
                    <div className="sidebar"><SidebarContainer/></div>
                    <div className="tickets"><TicketsContainer/></div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
