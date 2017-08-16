import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";
import { PicComponent, FormComponent } from '../styles/Activity';


class NewTripForm extends Component {
    constructor () {
        super();

        this.state = {
            trips: {
                place: '',
                date: Date
            },
            redirect: false
        }
    }

  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;
         const trips = { ...this.state.trips };
         trips[attributeName] = attributeValue;
         this.setState({ trips })
 };

  _handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state;
    const userId = this.props.match.params.userId
    const tripId = this.props.match.params.tripId
    axios.post(`/api/user/${userId}/trips/`, payload)
        .then((res) => {
      this.setState({"redirect": true});
    })
    .catch(err => console.log(err));
  };


    render() {
        const userId = this.props.match.params.userId
        if (this.state.redirect) {
            return <Redirect to={`/user/${userId}/`}/>
        } else {
        return (
            <PicComponent>
                <div className="navbar">
                    <Link to={`/user/${userId}`}>Home</Link>
                    <Link to={`/user/${userId}/`}>Back to Trips</Link>
                </div>
            <div className="newtrip">
            <FormComponent>
            Where to next?
              <form onSubmit={this._handleSubmit}>
                <div><input name="place" type="text" placeholder="where?" onChange={this._handleChange}/></div>
                <div><input name="date" type="date" placeholder="when?" onChange={this._handleChange}/></div>
                <input type="submit" value="Add New Trip"/>
            </form>  
            </FormComponent>                
            </div>
            </PicComponent>
        );
        }
    }
}
NewTripForm.defaultprops = {
    trip: {
        place: '',
        date: ''
    }
}

export default NewTripForm;