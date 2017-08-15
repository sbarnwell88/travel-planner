import React, { Component } from 'react';

class ActivityShow extends Component {
    constructor(){
        super();
        this.state= {
            activity: {}
        }
    }

    componentWillMount () {
        if (this.props.location.state){
            this.setState({activity: this.props.location.state.activity})
            console.log(this.props.location.state.activity);
        }
    }

    //     _deleteActivity = () => {
    //     const userId = this.props.userId;
    //     const tripId = this.props.tripId;
    //     const activityId = this.props._id;
    //     axios.get(`/api/user/${userId}/trips/${tripId}/activities/${activityId}/delete`)
    //         .then(res => {
    //             this.setState({
    //                 activities: res.data
    //             })
    //         })
    // }

    render() {

        return (
            <div>
                <div>{this.state.activity.description}</div>
                <div>{this.state.activity.price}</div>
                <div>{this.state.activity.paidFor}</div>
            </div>
        );
    }
}


export default ActivityShow;