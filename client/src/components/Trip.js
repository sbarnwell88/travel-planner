import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Trip extends Component {
    // <h5>Date: {this.props.date}</h5>
    render() {
        const userId = this.props.userId;
        return (
            <div>
                <p><Link to={`/user/${userId}/trips/${this.props._id}/activities`}>{this.props.place}</Link> on {this.props.date}</p>
            </div>
        );
    }
}

Trip.defaultProps = {
   place: [],
   userId: ''
}
export default Trip;