import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Task from './components/Task'
import Exercise2 from './components/Exercise2';
//Spot Check1
// const tasksOBJ =
//   [
//     { text: "Take out trash", complete: false },
//     { text: "Trash talk Carrie", complete: true },
//     { text: "Carry boxes upstairs", complete: false }
//   ]

// const [tasks, setTasks] = useState(tasksOBJ)

// function completeTask(text){
//   const newTasks = [...tasks]
//   newTasks.find(task => task.text === text).complete = true
//   setTasks(newTasks)
// }

//    {/* {tasks.filter(task => !task.complete).map(task => <Task completeTask ={completeTask} task = {task}/>)} */}

function App() {

  return (
    <div>
    <Exercise2 />
    </div>
  )
}

export default App;
