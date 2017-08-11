import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Trip extends Component {
    render() {
        return (
            <div>
                <h3>Place: <Link to={`/user/${this.state}/activities`}>{this.props.place}</Link></h3>
                <h5>Date: {this.props.date}</h5>
            </div>
        );
    }
}

Trip.defaultProps = {
   place: [] 
}
export default Trip;