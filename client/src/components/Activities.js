import React, { Component } from 'react';
import axios from 'axios';
import ActivityList from './ActivityList';

class Activities extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                trips: {
                    activities: {
                        paidFor: false,
                        price: 0,
                        date: Date,
                        description: ''
                }
            }
        }
    }
}

    componentWillMount() {
    this._activitiesInfo()
  }
  
  _activitiesInfo = () => {
    const id = this.props.match.params.userId
    const tripId = this.props.match.params.tripId
    axios.get(`/api/user/${id}/trips/${tripId}/`)
      .then((res) => {
        this.setState({user: res.data})
      })
    console.log(this.state.user.trips);
  }

    render() {
        return (
            <div>
                Hello from Activities
                <ActivityList trips={this.state.user.trips}/>
            </div>
        );
    }
}

Activities.defaultProps = {
   user: [],
   trips: [],
   activities: []
}

export default Activities;