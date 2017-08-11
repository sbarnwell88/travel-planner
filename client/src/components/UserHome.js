import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserHome extends Component {

  render() {
    return (
      <div>

          <h1>{this.props.username}'s Dashboard</h1> 
          <p>{this.props.trips}</p>
          <button><Link to={`/userId/trips`}>Trips</Link></button>
      </div>
    );
  }
}

export default UserHome;