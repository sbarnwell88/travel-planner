import React, { Component } from 'react';
import axios from 'axios';

class Activities extends Component {
    constructor() {
        super();
        this.state = {
            activities: {
                paidFor: false,
                price: 0,
                date: Date,
                description: ''
            }
        }
    }

    componentWillMount() {
    this._activitiesInfo()
  }
  
  _activitiesInfo = () => {
    axios.get(`/api/user/:userId/trips/:tripId/activities`)
      .then((res) => {
        const activities = res.data;
        this.setState({activities})
      })
  }

    render() {
        return (
            <div>
                Hello from Activities
            </div>
        );
    }
}

export default Activities;