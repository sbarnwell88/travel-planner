import React, { Component } from 'react';
import axios from 'axios';
import ActivityList from './ActivityList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PicComponent, ActivityComponent, Row} from '../styles/Activity';

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
        this._createActivityData(this.props.match.params.userId, this.props.match.params.tripId);
    }

    _createActivityData= (userId, tripId) => {
            axios.get(`/api/user/${userId}/trips/${tripId}`)
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

        const activityComponents = activities.map((activity, index) => {
        return <ActivityList 
        {...activity} 
        createActivityData={this._createActivityData}
        key={index} 
        userId={this.props.match.params.userId}
        tripId={this.props.match.params.tripId}
        activityId={this.state.id}
        />
    })

        return (
            <PicComponent>
                    <div className="navbar"><Link to={`/user/${userId}`}>Home</Link>
                    <Link to={`/user/${userId}/`}>Back to All Trips</Link>
                    </div>
                    <div>
                   {activityComponents}
                <Row>
                <ActivityComponent>
                    <button>
                        <div><Link to={`/user/${userId}/trips/${this.state.id}/activities/new`}>Add New Activity</Link></div>
                    </button>
                </ActivityComponent>
                </Row>
                    </div>
            </PicComponent>
        );
    }
}

Activities.defaultProps = {
   activities: []
}

export default Activities;