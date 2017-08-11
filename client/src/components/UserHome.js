import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      user: [],
      trips: []
    }
  }

  componentWillMount() {
    const id = this.props.match.params.userId
    console.log(id);
    axios.get(`/api/user/${id}`)
    .then(res => {
    console.log(res.data)
    // const user = res.data
    // this.setState({user});
    })
  }

  render() {
    return (
      <div>
          Hello from Home
          {this.state.user.username}
      </div>
    );
  }
}

export default UserHome;