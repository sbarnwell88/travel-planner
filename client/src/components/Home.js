import React, { Component } from 'react';
import axios from 'axios';
import UserHome from "./UserHome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginUser } from '../styles/User';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      username: '',
    }
  }
  componentWillMount() {
    this._userName()
  }
  
  _userName = () => {
    axios.get(`/api/user`)
      .then((res) => {
        const users = res.data;
        this.setState({users})
      })
  }

  render() {

        return (
            <LoginUser>
                 {this.state.users.map((user, i) => {
                    return (
                    <div key={i}> 
                    <Link to={`/user/${user._id}`}>Enter Site</Link>
                     </div> 
                    )
                })}
            </LoginUser>
            )
        }
    }

export default Home;