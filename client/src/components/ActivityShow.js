import React, { Component } from 'react';

class ActivityShow extends Component {
    constructor(){
        super();
        this.state= {
            activity: {}
        }
    }

    componentWillMount () {
        this.setState({activity: this.props.location.state.activity.description})
        console.log(this.props.location.state.activity);
    }

    render() {

        return (
            <div>
                <div>{this.props.location.state.activity.description}</div>
                <div>{this.props.location.state.activity.price}</div>
                <div>{this.props.location.state.activity.paidFor}</div>
            </div>
        );
    }
}

export default ActivityShow;