import React, { Component } from 'react';
import { useState } from 'react'
function Hot(){
    return(
        <div>I'm feeling too hot!</div>
    )
}

function Cold(){
    return(
        <div>I'm feeling too cold!</div>
    )
}
function SpotCheck4() {
    let [tempreture, setTempreture] = useState("cold")
      function switchTempreture(){
        tempreture === "cold"? setTempreture("hot") : setTempreture("cold")
      }
    
    return (
        <div className="ex-space">
            {tempreture === "cold"? <Cold /> : <Hot />}
            <button onClick={switchTempreture}></button>
        </div>
      )
}

export default SpotCheck4