import React from 'react'

export default function Task(props) {
  return (
    <div>
      <p>{props.task.text} <button className="complete" onClick={() => props.completeTask(props.task.text)}>complete</button></p>
    </div>
  )
}
