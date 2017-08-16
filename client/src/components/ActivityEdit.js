import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";


class ActivityEdit extends Component {
    constructor() {
        super();
        this.state= {
            activities: {
                description: '',
                date: Date,
                price: 0,
                reservation: '',
                paidFor: ''
            },
            redirect: false
        }
    }

    componentWillMount() {
        const userId = this.props.match.params.userId       
        const tripId = this.props.match.params.tripId
        const activityId = this.props.match.params.activityId;
        axios.get(`/api/user/${userId}/trips/${tripId}/activities/${activityId}`)
        .then((res) => {
            this.setState({
                _id: res.data._id,
                description: res.data.description,
                date: res.data.date,
                price: res.data.price,
                reservation: res.data.reservation,
                paidFor: res.data.paidFor
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    _handleChange = event => {
        const attributeName = event.target.name;
            const attributeValue = event.target.value;
            const activities = { ...this.state.activities };
            activities[attributeName] = attributeValue;
            this.setState({ activities })
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state.activities;
        const userId = this.props.match.params.userId       
        const tripId = this.props.match.params.tripId
        const activityId = this.props.match.params.activityId;
        axios.put(`/api/user/${userId}/trips/${tripId}/activities/${activityId}`, payload)
            .then((res) => {
        this.setState({"redirect": true});
        }).catch(err => console.log(err));
    }; 

    render() {
        const userId = this.props.match.params.userId
        const tripId = this.props.match.params.tripId

        if (this.state.redirect) {
            return <Redirect to={`/user/${userId}/trips/${tripId}/activities`}/>
        } else {
                    return (
            <div>
                Hello from Edit
                <form onSubmit={this._handleSubmit}>
                    <label htmlFor="description">Description: </label>
                    <input
                    onChange={this._handleChange}
                    name='description'
                    value={this.state.activities.description} 
                    type="text"
                    />
                    <label htmlFor="date">Date: </label>
                    <input
                    onChange={this._handleChange}
                    name='date'
                    value={this.state.activities.date} 
                    type="date"
                    />
                    <label htmlFor="price">Price: </label>
                    <input
                    onChange={this._handleChange}
                    name='price'
                    value={this.state.activities.price} 
                    type="number"
                    />
                    <label htmlFor="reservation">Reservation: </label>
                    <input
                    onChange={this._handleChange}
                    name='reservation'
                    value={this.state.activities.reservation} 
                    type="text"
                    />
                    <label htmlFor="paidFor">Paid for? </label>
                    <input
                    onChange={this._handleChange}
                    name='paidFor'
                    value={this.state.activities.paidFor} 
                    type="boolean"
                    />
                <button>Update Activity</button>
                </form>
            </div>
        );
        }

    }
}

ActivityEdit.defaultProps = {
    match: {
       params: {
           userId: '',
           tripId: '',
       }
   },
    location: {
        state: {
            activity: {
                _id: ''
            }
        }
    }
}

export default ActivityEdit;