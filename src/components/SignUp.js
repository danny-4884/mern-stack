
import React, { Component } from "react";
import Toast from 'light-toast';
import { connect } from 'react-redux';
import API from '../apiService/api';
import { saveUserData} from '../actions/userActions'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.mobileNumberInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.singnUp = this.singnUp.bind(this);
    }
    validation() {
        if (this.firstNameInput.current.value && this.firstNameInput.current.value.length < 4) {
            Toast.fail('Full Name must be 4 characters long!');
            return false;
        } else if (this.emailInput.current.value) {
            let emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            if (!emailRegex.test(this.emailInput.current.value)) {
                Toast.fail("Email is not valid!");
                return false;
            } else if (this.passwordInput.current.value && this.passwordInput.current.value.length < 5) {
                Toast.fail('Password must be 6 characters long!');
            } else {
                return true;
            }
        } else if (this.passwordInput.current.value && this.passwordInput.current.value.length < 5) {
            Toast.fail('Password must be 6 characters long!');
        } else {
            return true;
        }
    }
    singnUp() {
        if (this.validation()) {
            let user = {
                fName: this.firstNameInput.current.value,
                lName: this.lastNameInput.current.value,
                mobile: this.mobileNumberInput.current.value,
                email: this.emailInput.current.value,
                password: this.passwordInput.current.value,
            }
            API.post(`user/`, { user })
                .then((result) => {
                    console.log("result", result);
                    if (result.data.error) {
                        Toast.fail(result.data.error);
                    } else {
                        let user = result.data[0]
                        this.props.saveUserData(user);
                        Toast.success("Registration successfull",
                            3000,
                            () => {
                                this.props.history.push("/profile/" + user._id);
                            });
                    }
                })
                .catch(error => {
                    console.log("error", error);
                    Toast.fail("Registration failed")
                })
        }
    }
    render() {
        return (
            <div className="App">
                <h1>Ragistration</h1>
                <div>
                    <input autoComplete="off" type="firstName" ref={this.firstNameInput} name="firstName" placeholder="Enter First Name" />
                    <input autoComplete="off" type="lastName" ref={this.lastNameInput} name="lastName" placeholder="Enter Last Name" />
                    <input autoComplete="off" type="tel" ref={this.mobileNumberInput} name="mobile" placeholder="Enter mobile no." />
                    <input autoComplete="email" type="email" ref={this.emailInput} name="email" placeholder="Enter email" />
                    <input autoComplete="new-password" type="password" ref={this.passwordInput} name="password" placeholder="Enter password" />
                    <button onClick={this.singnUp}>Sign-Up</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveUserData: (userData) => {
            return dispatch(saveUserData(userData));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
