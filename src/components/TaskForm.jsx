import React, {useState} from "react";
import '../components-styles/taskform.css';
import {v4 as uuidv4} from 'uuid'
function TaskForm(props){
    const [input, setInput]= useState('')
    const change = (text) => {
        setInput(text.target.value);
    }
    const sendTask = (text) => {
        text.preventDefault()
        const newTask ={
            id: uuidv4(),
            text: input,
            complete: false

        }
        props.onSubmit(newTask)
    }
    return(
        <form className="task-form" onSubmit={sendTask}>
            <input className="task-input" type="text" placeholder="Escribe una Tarea" name="text" onChange={change} />
            <button className="task-button">Add Task</button>
        </form>
        
    )
}
export default TaskForm