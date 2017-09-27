import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import NewActivityForm from './NewActivityForm';
import { ActivityComponent, Row } from '../styles/Activity';
import Moment from 'react-moment';


class ActivityList extends Component {
    constructor() {
        super();
        this.state= {
            activities: []
        }
    }

    componentWillMount() {
        const userId = this.props.userId;
        const tripId = this.props.tripId;
        axios.get(`/api/user/${userId}/trips/${tripId}/activities`)
        .then((res) => {
            console.log(res.data);
        })
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

        console.log(this.props);
    return (
        <Row>
        <ActivityComponent>
            <h3>
            <div>Description: {this.props.description}</div>
            <div>${this.props.price}</div>
            <div>Date: <Moment format="YYYY/MM/DD">{this.props.date}</Moment></div>
            </h3>
            <button><Link to={`/user/${userId}/trips/${tripId}/activities/${activityId}/edit`}
            activity={this.props}
            >update activity</Link></button>
            <button onClick={this._deleteActivity}>delete</button>
        </ActivityComponent>
        </Row>
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