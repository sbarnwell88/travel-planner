import React, { Component } from 'react';
import axios from 'axios';
import ActivityList from './ActivityList';

class Activities extends Component {
    constructor() {
        super();
        this.state = {
                trips: {
                    activities: []
        }
    }
  }
    // componentWillMount() {
    //     const id = this.props.match.params.userId
    //     const tripId = this.props.match.params.tripId
    //     axios.get(`/api/user/${id}/trips/${tripId}/`)
    //     .then(res => {
    //         this.setState({activity: res.data})
    //     })
    //     console.log(this.state)
    // }

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
        const activities = this.state.trips.activities;
        console.log(activities);

        const activityComponents = activities.map((activity, index) => {
        return <ActivityList {...activity} key={index} />
    })

        return (
            <div>
                Hello from Activities
                 {activityComponents} 
            </div>
        );
    }
}

Activities.defaultProps = {
   activities: []
}

export default Activities;