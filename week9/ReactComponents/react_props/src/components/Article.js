import React, { Component } from 'react';

function Article(props) {

    return (
        <h1>type = {props.info.type} color = {props.info.color} size = {props.info.size}</h1>
    )

}

export default Article