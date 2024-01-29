import React, { useState } from 'react'
import App from '../App'
import Contact from './Contact'

export default function List(props) {
    return(
        <ul>
        {props.contacts.map(contact => <Contact contact ={contact} displayConv={props.displayConv}/>)}
        </ul>
        
    )

}