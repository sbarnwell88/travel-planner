import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserHome extends Component {
    constructor(){
    super();
    this.state = {
      username: 'Susy',
      trips: ''
    }
  }

  componentWillMount(){
    axios.get('/api/homepage').then(res => {
      console.log(res.data);
      this.setState({username: res.data})
    });
  }
  // _handleChange = e => {
  //   this.setState({ username: e.target.value });
  // };

  render() {
    return (
      <div>
          <h1>{this.state.username}'s Dashboard</h1>
      </div>
    );
  }
}

export default UserHome;