import React, { Component } from 'react';

class NewTripForm extends Component {
    constructor () {
        super();

        this.state = {
            newTrip: {}
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

    this.props.addNewTripList(this.state.newTrip);
}

    render() {
        return (
            <div>
            Where to next?
            <form onSubmit={this._addNewTrip}>
                <div><input name="place" type="text" placeholder="where?" onChange={this._handleNewTrip}/></div>
                <div><input name="date" type="date" placeholder="when?" onChange={this._handleNewTrip}/></div>
                <div><input name="activities" type="text" placeholder="activities?" onChange={this._handleNewTrip}/></div>
                <div><input type="submit" value="Add New Trip"/></div>
            </form>                
            </div>
        );
    }
}

export default NewTripForm;