import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trip from './Trip';


class Trips extends Component {
    render() {
    const trips = this.props.trips;

    const tripsComponent = trips.map((trip, index) => {
        return <Trip {...trip} key={index} />
    })
        
    return (
        <div>
            {tripsComponent}
        </div>
        );
    }
}

Trips.defaultProps = {
   trips: [] 
}

export default Trips;