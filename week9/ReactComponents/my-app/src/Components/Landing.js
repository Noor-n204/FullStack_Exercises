import React, { Component } from 'react';

function Landing(props){
    return(
        <div>Welcome, {props.user}. The hottest item is {props.store.filter(i => i.hottest== true).map(i => <div>{i.item}</div>)}</div>
    )
}

export default Landing