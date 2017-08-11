import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trips from './Trips';

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      user: {
        trips: [],
      }
    }
  }

  componentWillMount() {
    const id = this.props.match.params.userId
    console.log(id);
    axios.get(`/api/user/${id}`)
    .then(res => {
    this.setState({
      id: res.data._id,
      user: res.data
    });
    console.log(this.state.user.trips);
    })
  }

  render() {

    return (
      <div>
          <h1>Hello {this.state.user.username}</h1> 
           <Link to={`/user/${this.state.id}/trips`}>{this.state.user.username}'s Trips</Link> 
           <Trips trips={this.state.user.trips} />    
      </div>
    );
  }
}

export default UserHome;