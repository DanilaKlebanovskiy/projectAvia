import {connect} from "react-redux";
import Tickets from "./Tickets";
import {
    setFilterMethodAC,
    sortTicketsAC,
    ticketsThunk
} from "../redux/tickets_reducer/ticket_reducer";
import React, {useEffect} from "react";

const TicketsContainer = (props) => {

    return (
        <div>
            <Tickets {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tickets: state.tickets.ticketsToShow,
    sortState: state.tickets.sortState

});

const mapDispatchToProps = (dispatch) => ({
    sortTickets : (method) => dispatch(sortTicketsAC(method)),
    ticketsThunk: () => dispatch(ticketsThunk()),
    setFilterMethod: (method) => dispatch(setFilterMethodAC(method))
})


export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer)