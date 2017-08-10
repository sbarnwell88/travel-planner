import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserHome from "./components/UserHome";
import Trips from './components/Trips';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/homepage">Login</Link>
            <button><Link to="/homepage/trips">Trips</Link></button>
          </div>
          <div>
            <Route exact path="/homepage" component={UserHome} />
            <Route exact path="/homepage/trips" component={Trips} />
            {/* <Route path="/game/:gameId" component={Game} /> */}
            {/* <Route path="/add-category" component={AddCategory} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;