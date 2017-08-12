import React, { Component } from 'react';
import axios from 'axios';

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
    console.log(this.state.user.trips.activities.price);
  }

    render() {
        return (
            <div>
                Hello from Activities
                <h3>Price: {this.state.user.trips.activities.price}</h3>
            </div>
        );
    }
}

export default Activities;