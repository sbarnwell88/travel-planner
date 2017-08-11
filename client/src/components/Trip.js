import React, { Component } from 'react';

class Trip extends Component {
    render() {
        return (
            <div>
                {this.props.place}
            </div>
        );
    }
}

Trip.defaultProps = {
   place: [] 
}
export default Trip;