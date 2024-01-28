import React, { Component } from 'react';

function Item(props){
    return(
        <div>{props.item} has a price {props.price}</div>
    )
}

export default Item