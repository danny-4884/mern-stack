
import React, { Component } from "react";
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions'
import { compose } from 'redux';
import { withRouter } from 'react-router';

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser() {
        this.props.logoutUser();
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <button onClick={this.logoutUser}>Log-Out</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => {
            return dispatch(logoutUser());
        }
    }
}
export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(LogoutButton);
