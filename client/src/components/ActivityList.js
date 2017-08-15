import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import NewActivityForm from './NewActivityForm';

class ActivityList extends Component {
    constructor() {
        super();
        this.state= {
            activities: []
        }
    }


     _deleteActivity = () => {
        const userId = this.props.userId;
        const tripId = this.props.tripId;
        const activityId = this.props._id;
        axios.delete(`/api/user/${userId}/trips/${tripId}/activities/${activityId}/delete`)
            .then(res => {
                this.props.createActivityData(userId, tripId)
                })
    }

    render() {
        const userId = this.props.userId;
        const tripId = this.props.tripId;
        const activityId = this.props._id;

    return (
        <div>
            <h3>
                <Link to={{
                pathname: `/user/${userId}/trips/${tripId}/activities/${activityId}`,
                description: this.props.description
            }}>{this.props.description}</Link>
            <div>{this.props.price}</div>
            <div>{this.props.date}</div>
            </h3>
            <button onClick={this._deleteActivity}>delete</button>
        </div>
    );
};
}

ActivityList.defaultProps = {
   match: {
       params: {
           userId: '',
           tripId: '',
       }
   },
    activities: []
}


export default withRouter(ActivityList);