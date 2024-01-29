import React, { useState } from 'react'
import List from './List'
import Conversation from './Conversation'

export default function Exercise2() {
    let conversationsData = {
        displayConversation: "Laura",
        conversations:[
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    }

    function shiftBack(){
        setdisplayConv(null)
    }

    function displayConvo(name){
        setdisplayConv(name)
    }

    let [displayConv , setdisplayConv] = useState(null)

    return (
            <div> 
            {displayConv == null ? <List contacts ={conversationsData.conversations.map(conv => conv.with)}  displayConv={displayConvo}/> : <Conversation conversation = {conversationsData.conversations.find(conv => conv.with === displayConv).convo} sender = {displayConv} shiftBack={shiftBack}/>}
            </div>

    )
}