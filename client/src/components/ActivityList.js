import React from 'react';
import NewActivityForm from './NewActivityForm';

const ActivityList = (props) => {
    <NewActivityForm description={props.description} date={props.date} paid={props.paidFor} price={props.price}/>
    return (
        <div>
            <h3>Description: {props.description}</h3>
            <h5>Date: {props.date}</h5>
            <h5>Paid for?: {props.paidFor}</h5>
            <h5>Price: {props.price}</h5>
        </div>
    );
};

ActivityList.defaultProps = {
   description: [],
}

export default ActivityList;