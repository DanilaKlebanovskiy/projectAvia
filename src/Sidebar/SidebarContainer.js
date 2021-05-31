import {connect} from "react-redux";
import {
    filterTicketsAC, resetTicketsAC,
    setFilterMethodAC, sortTicketsAC,
} from "../redux/tickets_reducer/ticket_reducer";
import React from "react";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
    return (
        <div>
            <Sidebar {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filterForm : state.tickets.filterForm,
});

const mapDispatchToProps = (dispatch) => ({
    filterTickets : () => dispatch(filterTicketsAC()),
    setFilterMethod: (method) => dispatch(setFilterMethodAC(method)),
    resetTickets: () => dispatch(resetTicketsAC())
})


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)