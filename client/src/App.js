import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import UserHome from "./components/UserHome";
import Trips from './components/Trips';
import Activities from './components/Activities';
import NewTripForm from './components/NewTripForm';
import NewActivityForm from './components/NewActivityForm';
import ActivityEdit from './components/ActivityEdit';

class App extends Component {
  render(){
    return (
      <div>
      <Router>
        <div>
          <div>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:userId/" component={UserHome} />
            <Route exact path="/user/:userId/trips" component={Trips} />
            <Route exact path="/user/:userId/trips/new" component={NewTripForm}/>
            <Route exact path="/user/:userId/trips/:tripId/activities/" component={Activities} />
            <Route exact path="/user/:userId/trips/:tripId/activities/new/" component={NewActivityForm}/>
            <Route exact path="/user/:userId/trips/:tripId/activities/:activityId/edit/" component={ActivityEdit}/>
          </div>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;