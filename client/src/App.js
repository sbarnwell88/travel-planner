import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserHome from "./components/UserHome";
import Trips from './components/Trips';
import Activities from './components/Activities';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      trips: []
    }
  }

  _userName = () => {
    axios.get(`/api/:userId`)
      .then((res) => {
        const username = res.data;
        this.setState({username})
      })
  }

  _userTrips = () => {
    axios.get(`/api/:userId/trips`)
      .then((res) => {
        const trips = res.data;
        this.setState({trips})
      })
  }

  componentWillMount () {
    this._userName()
  }

  render() {

    const UserProfileComponent = () => (
      <UserHome 
        username={this.state.username} />
    )

    const TripsComponent = () => (
      <UserHome 
        trips={this.state.trips} />
    )

    return (
      <Router>
        <div>
          <div>
            <Link to={`/:userId`}>Login</Link>
          </div>
          <div>
            <Route exact path="/:userId" render={UserProfileComponent} />
            <Route exact path="/:userId/trips" render={TripsComponent} />
            <Route exact path="/:userId/trips/activities" component={Activities} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;