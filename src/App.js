import logo from './logo.svg';
import './App.css';
import {ticketsApi} from "./api/api";
import {useEffect} from "react";
import s from "./App.css"
import logPic from "../src/img/logo.svg"
import Tickets from "./tickets/Tickets";
import Sidebar from "./Sidebar/Sidebar";

function App() {
    useEffect(() => {
        Search()
    },[])
  const  Search = async () =>  {
      try{
          const response  = await ticketsApi.getSearch()
          console.log(response.data.searchId)
          const {data} = await ticketsApi.getTickets(response.data.searchId)
      } catch(e) {
          await Search()
          // setTimeout(() => {Search()}, 500)
          // console.log("hui")
      }
  }

  return (
      <div className="page">
      <div className="container">
          <div className="logo"><img className ="picture" src = {logPic}/></div>
          <div className="sidebar"><Sidebar/></div>
          <div className="tickets"><Tickets/></div>

      </div>
      </div>
     /* <div className={s.page}>
    <div className={s.gridContainer}>
        <div className={s.logo}><img className ={s.picture} src = {logPic}/></div>
        <div className={s.sideBar}>sideBar</div>
        <div className={tickets}><Tickets/></div>
    </div>
      </div>*/
  );
}

export default App;
