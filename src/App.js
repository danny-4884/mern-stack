
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import './sass/app.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile/:user_id" component={Profile} />
            <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}
export default hot(module)(App);
