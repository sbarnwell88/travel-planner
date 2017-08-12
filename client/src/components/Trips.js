import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trip from './Trip';


class Trips extends Component {
    render() {
    const trips = this.props.trips;

    const userId = this.props.userId;
    console.log(userId);

    const tripsComponent = trips.map((trip, index) => {
        return <Trip {...trip} key={index} userId={userId}/>
    })
        
    return (
        <div>
            {tripsComponent}
        </div>
        );
    }
}

Trips.defaultProps = {
   trips: [],
   userId: ''
}

export default Trips;