import React, { Component } from 'react';

class ActivityShow extends Component {
    render() {

        console.log(this.props.description);
        return (
            <div>
                Hello
                {this.props.description}
            </div>
        );
    }
}

export default ActivityShow;