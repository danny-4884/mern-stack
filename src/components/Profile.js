
import React, { Component } from "react";
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';
import { saveUserData } from '../actions/userActions'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }
    componentDidMount() {
        this.setState({ userData: this.props.user });
    }
    render() {
        return (
            <div>
                {
                    this.state.userData ?
                        (<div className="App">

                            <h1>Welcome  s...{this.state.userData.fName + " " + this.state.userData.lName}</h1>
                            <LogoutButton onClick={this.logoutUser}>Log-Out</LogoutButton>
                        </div>)
                        :
                        (<div>
                            please wait...
                        </div>)
                }
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveUserData: (userData) => {
            return dispatch(saveUserData(userData));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
