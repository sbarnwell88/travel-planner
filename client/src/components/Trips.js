import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trip from './Trip';
import Activities from './Activities';
import TripSearch from './TripSearch';


class Trips extends Component {
    render() {
    const trips = this.props.trips;
    const userId = this.props.userId;

    console.log(trips);

    const tripsComponent = trips.map((trip, index) => {
        return <Trip {...trip} key={index} userId={userId}/>
    })
        
    return (
        <div>
            {tripsComponent}
            <TripSearch trip={this.state} />
        </div>
        );
    }
}

Trips.defaultProps = {
   trips: [],
   userId: ''
}

export default Trips;