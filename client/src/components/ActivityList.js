import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import ActivityShow from './ActivityShow';
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
        axios.get(`/api/user/${userId}/trips/${tripId}/activities/${activityId}/delete`)
            .then(res => {
                this.setState({
                    activities: res.data
                })
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
                state: {activity: this.props}
            }}>{this.props.description}</Link>
            </h3>
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
}


export default ActivityList;