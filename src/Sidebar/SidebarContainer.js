import {connect} from "react-redux";
import {
    setFilterMethodAC,
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
    filterMethod: state.tickets.filterMethod
});

const mapDispatchToProps = (dispatch) => ({
    setFilterMethod: (method) => dispatch(setFilterMethodAC(method))
})


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)