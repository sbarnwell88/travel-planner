import React, { Component } from 'react';
import axios from 'axios';
import UserHome from "./UserHome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      username: '',
      trips: []
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

  _userTrips = () => {
    axios.get(`/api/user/:userId/trips`)
      .then((res) => {
        const trips = res.data;
        this.setState({trips})
      })
  }

  render() {
        return (
            <div>
                {this.state.users.map((user, i) => {
                    return (
                    <div key={i}>
                    <Link to={`/user/${user._id}`}>{user.username}'s Dashboard</Link>
                    </div>
                    )
                })}
            </div>
            )
        }
    }

export default Home;