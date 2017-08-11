import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Trips extends Component {
    render() {
        return (
            <div>
                Hello from Trips
                <Link to={`/:userId/trips/activities`}>Activities</Link>
            </div>
        );
    }
}

export default Trips;