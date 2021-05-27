import {connect} from "react-redux";
import Tickets from "./Tickets";
import {ticketsThunk} from "../redux/tickets_reducer/ticket_reducer";
import React, {useEffect} from "react";

const TicketsContainer = (props) => {

    return (
        <div>
            <Tickets {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tickets: state.tickets.tickets
});

export default connect(mapStateToProps, {ticketsThunk})(TicketsContainer)