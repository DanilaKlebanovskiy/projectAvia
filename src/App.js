import './App.css';
import {ticketsApi} from "./api/api";
import {useEffect} from "react";
import logPic from "../src/img/logo.svg"
import Sidebar from "./Sidebar/Sidebar";
import TicketsContainer from "./tickets/TicketsContainer";
import {Provider} from "react-redux";

function App() {
    // useEffect(() => {
    //     Search()
    // }, [])
    // const Search = async () => {
    //     try {
    //         const response = await ticketsApi.getSearch()
    //         console.log(response.data.searchId)
    //         const {data} = await ticketsApi.getTickets(response.data.searchId)
    //     } catch (e) {
    //         await Search()
    //     }
    // }

    return (
        <Provider store={store}>
            <div className="page">
                <div className="container">
                    <div className="logo"><img className="picture" src={logPic}/></div>
                    <div className="sidebar"><Sidebar/></div>
                    <div className="tickets"><TicketsContainer/></div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
