import React, { Component } from 'react';

class ActivityShow extends Component {
    constructor(){
        super();
        this.state= {
            activity: {}
        }
    }

    componentWillMount () {
        if (this.props.location.state){
            this.setState({activity: this.props.location.state.activity})
            console.log(this.props.location.state.activity);
        }
    }

    render() {

        return (
            <div>
                <div>{this.state.activity.description}</div>
                <div>{this.state.activity.price}</div>
                <div>{this.state.activity.paidFor}</div>
            </div>
        );
    }
}


export default ActivityShow;