import React, { Component } from 'react';
import { useState } from 'react'

function Hudini(){
    let [show, setShow] = useState("false")
    return(
        <div>{show === "false"? <div>Now you don’t</div> : <div>Now you see me</div> }</div>
    )
}

export default Hudini