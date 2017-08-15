import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import ActivityShow from './ActivityShow';
import NewActivityForm from './NewActivityForm';

const ActivityList = (props) => {
    const userId = props.userId;
    const tripId = props.tripId;
    const activityId = props.activityId;
    console.log(activityId)

    // _deleteActivity = (activityId) => {
    //     axios.delete(`/api/user/${userId}/trips/${tripId}/activities/{activityId}/delete`)
    //         .then(res => {
    //             this.setState({
    //                 activities: res.data
    //             })
    //         })
    // }

    return (
        <div>
            <h3>
                <Link to={{
                pathname: `/user/${userId}/trips/${tripId}/activities/${activityId}`,
                state: {activity: props}
            }}>{props.description}</Link>
             <button onClick={props.delete(userId, tripId, activityId)}>Delete</button> 
            </h3>
        </div>
    );
};

ActivityList.defaultProps = {
   description: [],
}

export default ActivityList;