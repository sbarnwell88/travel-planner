import React, { Component } from 'react';
import axios from 'axios';
import ActivityList from './ActivityList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Activities extends Component {
    constructor() {
        super();
        this.state = {
                trips: {
                    activities: []
        }
    }
  }

    componentWillMount() {
        const id = this.props.match.params.userId
        const tripId = this.props.match.params.tripId
            axios.get(`/api/user/${id}/trips/${tripId}`)
                .then(res => {
                this.setState({
                    id: res.data._id,
                    trips: res.data,
            });
            console.log(this.state.trips.activities);
            console.log(res.data.activities);
        })
    }


    render() {
        const userId = this.props.match.params.userId;
        const activities = this.state.trips.activities;
        console.log(activities);

        const activityComponents = activities.map((activity, index) => {
        return <ActivityList 
        {...activity} 
        key={index} 
        userId={this.props.match.params.userId}
        tripId={this.props.match.params.tripId}
        activityId={this.state.id}
        />
    })

        return (
            <div>
                   {activityComponents}
                 <Link to={`/user/${userId}/trips/${this.state.id}/activities/new`}>Add New Activity</Link>
            </div>
        );
    }
}

Activities.defaultProps = {
   activities: []
}

export default Activities;