import React, { useState } from 'react'

export default function Conversation(props) {
    props.conversation.map((convo) => {convo.sender ==="self" ? "Me" : props.sender
        
    })
    return(<div>
            {props.conversation.map((convo) => {return <div><span><b>{convo.sender ==="self" ? "Me" : props.sender }</b></span>
              <span> : </span>  {convo.text}</div>})}
            <button onClick={()=>props.shiftBack()}>Back</button>
            </div>)
}