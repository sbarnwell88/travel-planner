import React, { Component } from 'react';
import axios from 'axios';


class NewTripForm extends Component {
    constructor () {
        super();

        this.state = {
            newTrip: {
                place: '',
                date: Date
            }
        }
    }

    _handleNewTrip = (event) => {
     const attributeName = event.target.name;
     const attributeValue = event.target.value;
 
     const newTrip = {...this.state.newTrip};
     newTrip[attributeName] = attributeValue;
 
     this.setState({newTrip})
   };

   _addNewTrip = (event) => {
 	event.preventDefault();
 	
 	this.props.addNewTripToTripList(this.state.newTrip);
 };


    render() {
        return (
            <div>
            Where to next?
              <form onSubmit={this._handleSubmit}>
                <div><input name="place" type="text" placeholder="where?" onChange={this._handleNewTrip}/></div>
                <div><input name="date" type="date" placeholder="when?" onChange={this._handleNewTrip}/></div>
                <div><input type="submit" value="Add New Trip"/></div>
            </form>                  
            </div>
        );
    }
}

export default NewTripForm;