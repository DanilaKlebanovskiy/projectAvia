import {connect} from "react-redux";
import Tickets from "./Tickets";
import {ticketsThunk} from "../redux/tickets_reducer/ticket_reducer";
import React, {useEffect} from "react";
import {actionCreatorFastest} from "../redux/tickets_reducer/ticket_reducer"

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

function test(dispatch) {
    return {
        isFastest: (tog) => dispatch(actionCreatorFastest(tog)),
    
    }
  }

export default connect(mapStateToProps, {ticketsThunk,test})(TicketsContainer)