import React, { Component } from 'react';
import { useState } from 'react'

function SpotCheck5(props) {
    function addLike(){
        setLikes(likes+1)
    }
    let [likes, setLikes] = useState(0)
    return (
        <div>
            <div>{likes}</div>
            <button onClick={addLike}>Click me</button>    
        </div>)
        
}

export default SpotCheck5