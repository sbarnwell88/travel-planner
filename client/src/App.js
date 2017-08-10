import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserHome from "./components/UserHome";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Route exact path="/" component={UserHome} />
            {/* <Route path="/game/:gameId" component={Game} /> */}
            {/* <Route path="/add-category" component={AddCategory} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;