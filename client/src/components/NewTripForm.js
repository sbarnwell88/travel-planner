import React, { Component } from 'react';

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

    _addNewTripList = (newTrip) => {
        const trips = [...this.state.user.trips];
        trips.push(newTrip);
        this.setState({trips});
    }

    _addNewTrip = (event) => {
    event.preventDefault();

    // this.addNewTripList(this.state.newTrip);
}

    render() {
        return (
            <div>
            Where to next?
             <form onSubmit={this._addNewTrip}>
                <div><input name="place" type="text" placeholder="where?" onChange={this._handleNewTrip}/></div>
                <div><input name="date" type="date" placeholder="when?" onChange={this._handleNewTrip}/></div>
                <div><input type="submit" value="Add New Trip"/></div>
            </form>                 
    {/* <div>
      <h3> {place} </h3>
      <label htmlFor={`${place}trip`}>Place: </label>
      <input onChange={props.changeEvent} type="text" 
            value={trip} name={`${place}trip`}
            type="trip"
      />
      <br /> */}
      {/* <label htmlFor={`${value}question`}>Answer: </label>
      <input onChange={props.changeEvent} type="text"
            value={answer} name={`${value}question`}
            points={value} type="answer"
      />
      <br /> */}
    {/* </div> */}
            </div>
        );
    }
}

export default NewTripForm;