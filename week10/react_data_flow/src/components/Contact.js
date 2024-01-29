import React, { useState } from 'react'

export default function Contact(props) {
    console.log(props.contact)
    return(
        <li onClick={()=>props.displayConv(props.contact)}>
        {props.contact}
        </li>
        
    )

}