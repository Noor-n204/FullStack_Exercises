import Spam from "./Spam";
import React, { Component } from 'react';


function Spamalot(){
    let spamArr = []
    for(let i=0 ; i<500; i++){
        spamArr.push(<Spam />)
    }

    return (
        <div>
            {spamArr}
        </div>
    )
}

export default Spamalot

