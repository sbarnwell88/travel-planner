import React, { Component } from 'react';

class Trip extends Component {
    render() {
        return (
            <div>
                <h3>Place: {this.props.place}</h3>
                <h5>Date: {this.props.date}</h5>
            </div>
        );
    }
}

Trip.defaultProps = {
   place: [] 
}
export default Trip;