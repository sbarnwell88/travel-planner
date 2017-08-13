import React from 'react';

const ActivityList = (props) => {

    return (
        <div>
            <h3>Description: {props.description}</h3>
            <h3>Date: {props.date}</h3>
            <h3>Paid for?: {props.paidFor}</h3>
            <h3>Price: {props.price}</h3>
        </div>
    );
};

ActivityList.defaultProps = {
   description: [],
}

export default ActivityList;