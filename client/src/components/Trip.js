import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Trip extends Component {
    render() {
        console.log(this.props._id);
        return (
            <div>
                <h3>Place: <Link to={`/user/${this.props.userId}/trips/${this.props._id}/activities`}>{this.props.place}</Link></h3>
                <h5>Date: {this.props.date}</h5>
            </div>
        );
    }
}

Trip.defaultProps = {
   place: [],
   userId: ''
}
export default Trip;