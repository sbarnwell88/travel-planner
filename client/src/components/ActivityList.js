import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import ActivityShow from './ActivityShow';

const ActivityList = (props) => {
    const userId = props.userId;
    const tripId = props.tripId;
    const activityId = props.activityId;

    const description = props.description;

    <ActivityShow 
    description={description}/>

    return (
        <div>
            <h3>Description: <Link to={`/user/${userId}/trips/${tripId}/activities/${activityId}`}>{props.description}</Link></h3>
        </div>
    );
};

ActivityList.defaultProps = {
   description: [],
}

export default ActivityList;