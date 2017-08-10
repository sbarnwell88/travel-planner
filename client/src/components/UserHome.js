import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserHome extends Component {
    constructor(){
    super();
    this.state = {
      trips: ''
    }
  }

  componentWillMount(){
    axios.get('/api/trips').then(res => {
      console.log(res.data);
      this.setState({trips: res.data})
    });
  }

  render() {
    return (
      <div>
          <h1>{this.state.username}'s Dashboard</h1>
          <button>Add New Trip</button>
      </div>
    );
  }
}

export default UserHome;