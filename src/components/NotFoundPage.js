
import React, { Component } from "react";
import {Link} from 'react-router-dom';
class NotFoundPage extends Component {
    render() {
        return (
            <div className="App">
                <h1>Ohoooooo you lost!!!</h1>
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}
export default NotFoundPage;
