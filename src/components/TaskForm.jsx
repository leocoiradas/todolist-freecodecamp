import React from "react";
import '../components-styles/taskform.css'
function TaskForm(){
    return(
        <form className="task-form">
            <input className="task-input" type="text" placeholder="Escribe una Tarea" name="text" />
            <button className="task-button">Add Task</button>
        </form>
        
    )
}
export default TaskForm