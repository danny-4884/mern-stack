
import React, { Component } from "react";
import Toast from 'light-toast';
import { connect } from 'react-redux';
import API from '../apiService/api';
import { saveUserData} from '../actions/userActions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: null,
            password: null
        }
        this.mobileNumberInput = React.createRef();
        this.passwordInput = React.createRef();
        this.singnIn = this.singnIn.bind(this);
    }
    singnIn() {
        let mobile = this.mobileNumberInput.current.value;
        let password = this.passwordInput.current.value;
        API.get(`user/getUserByPhon/${mobile}`)
            .then((result) => {
                if (result && result.data) {
                    let user = result.data[0]
                    if (user.password === password) {
                        this.props.saveUserData(user);
                        Toast.success("Loging successfull",
                            1000,
                            () => {
                                this.props.history.push("/profile/" + user._id);
                            });
                    } else {
                        Toast.fail("Incorrect credentials");
                    }
                } else {
                    Toast.fail("User not found");
                }
            })
            .catch(error => {
                Toast.fail("User not found");
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Sign-In</h1>
                <div>
                    <input type="tel" ref={this.mobileNumberInput} name="mobile" placeholder="Enter mobile no." />
                    <input type="password" ref={this.passwordInput} name="password" placeholder="Enter password" />
                    <button onClick={this.singnIn}>Sign-In</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userData:state.userData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveUserData: (userData) => {
            return dispatch(saveUserData(userData));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
