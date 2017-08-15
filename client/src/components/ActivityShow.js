import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class ActivityShow extends Component {
    constructor(){
        super();
        this.state= {
            activity: []
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
                <div>{this.props.description}</div>
                <div>{this.state.activity.price}</div>
                <div>{this.state.activity.paidFor}</div>
            </div>
        );
    }
}


export default withRouter(ActivityShow);