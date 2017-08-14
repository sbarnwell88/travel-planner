import React, { Component } from 'react';
import axios from 'axios';


class NewActivityForm extends Component {
    constructor() {
        super();
        this.state = {
                activities: {
                    description: '',
                    price: 0
                }
            }
    }

//   _changeActivity = e => {
//     const newState = { ...this.state };
//     newState.trips.name = e.target.value;
//     this.setState(newState);
//   };

  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;
         const activities = { ...this.state.activities };
         activities[attributeName] = attributeValue;
         this.setState({ activities })
 };

  _handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state;
    console.log("Payload: ");
    console.log(payload)
    const userId = this.props.match.params.userId
    console.log(userId);
    const tripId = this.props.match.params.tripId
    axios.post(`/api/user/${userId}/trips/${tripId}/activities/`, payload)
        .then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

    render() {
        return (
            <div>
                Hello from new NewActivityForm
        <form onSubmit={this._handleSubmit}>
          <div>
            <label htmlFor="description">Description: </label>
            <input value={this.state.activities.description} type="text" name="description" onChange={this._handleChange}/>
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input
              value={this.state.activities.price}
              type="number"
              name="price"
              onChange={this._handleChange}
            />
          </div>
        <button>Add Activity</button>
        </form>
            </div>
        );
    }
}

export default NewActivityForm;