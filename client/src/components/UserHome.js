import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trips from './Trips';
import NewTripForm from './NewTripForm';

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
    axios.get(`/api/user/${id}`)
    .then(res => {
    this.setState({
      id: res.data._id,
      user: res.data
    });
    console.log(this.state.user.trips);
    console.log(this.state.id);
    })
  }

  render() { 
    <NewTripForm addNewTripList={this._addNewTripList}></NewTripForm>
    return (
      <div>
          <h1>Hello {this.state.user.username}</h1> 
          <h3>Where to Next?</h3>
            <Link to={`/user/${this.state.id}/trips/new`}>New Trip</Link>  
            <Trips trips={this.state.user.trips} 
           userId={this.state.id}/>    
      </div>
    );
  }
}

export default UserHome;