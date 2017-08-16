import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginUser } from '../styles/User';


class Login extends Component {
    render() {
        return (
            <LoginUser>
                <div>
                <Link to={`/user`}>Login</Link>
                </div>
            </LoginUser>
        );
    }
}

export default Login;