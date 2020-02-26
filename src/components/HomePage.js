
import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton'
class HomePage extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="App">
                <h1>Welcome ...</h1>
                {user ?
                    <LogoutButton>LogOut</LogoutButton>
                    :
                    <h4>
                        <NavLink to="/login" activeClassName="activeLink" style={{ marginRight: '60px' }} exact>Sign-In</NavLink>
                        <NavLink to="/signup" activeClassName="activeLink" exact>Sign-Up</NavLink>
                    </h4>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userData
    }
}
export default connect(mapStateToProps)(HomePage);
