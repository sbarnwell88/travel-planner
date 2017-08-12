import React, { Component } from 'react';
import axios from 'axios';
import ActivityList from './ActivityList';

class Activities extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                trips: {
                    activities: []
            }
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
                    user: res.data
            });
            console.log(this.state.user.activities);
        })
    }

    render() {

    //     const activityComponents = this.state.user.map((activity, index) => {
    //     return <ActivityList {...activity} key={index} />
    // })

        return (
            <div>
                Hello from Activities
                {/* {activityComponents} */}
            </div>
        );
    }
}

Activities.defaultProps = {
   activities: []
}

export default Activities;