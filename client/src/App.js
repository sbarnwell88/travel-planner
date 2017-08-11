import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import UserHome from "./components/UserHome";
import Trips from './components/Trips';
import Activities from './components/Activities';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <div>
            <Link to={`/user`}>Login</Link>
          </div>
          <div>
            <Route exact path="/user/" component={Home} />
            <Route exact path="/user/:userId" component={UserHome} />
            <Route exact path="/user/:userId/" component={Trips} />
            <Route exact path="/user/:userId/activities" component={Activities} />
          </div>
          </div>
      </Router>
    );
  }
}

export default App;