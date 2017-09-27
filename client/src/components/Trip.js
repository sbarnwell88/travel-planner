import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Moment from 'react-moment';


class Trip extends Component {
    render() {
        const userId = this.props.userId;
        return (
            <div>
                <p><Link to={`/user/${userId}/trips/${this.props._id}/activities`}>{this.props.place}</Link> on <Moment format="YYYY/MM/DD">{this.props.date}</Moment></p>
            </div>
        );
    }
}

Trip.defaultProps = {
   place: [],
   userId: ''
}
export default Trip;