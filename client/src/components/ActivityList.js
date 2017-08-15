import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import ActivityShow from './ActivityShow';

const ActivityList = (props) => {
    const userId = props.userId;
    const tripId = props.tripId;
    const activityId = props.activityId;
    const _deleteActivity = () => {
        console.log(activityId);
        axios.delete(`/api/user/${userId}/trips/${tripId}/activities/${activityId}/delete`)
            .then(res => {
                console.log("You deleted it!")
                })
            }

    return (
        <div>
            <h3>
                <Link to={{
                pathname: `/user/${userId}/trips/${tripId}/activities/${activityId}`,
                state: {activity: props}
            }}>{props.description}</Link>
            <button onClick={_deleteActivity()}>Delete</button>
            </h3>
        </div>
    );
};

ActivityList.defaultProps = {
   description: [],
}

export default ActivityList;