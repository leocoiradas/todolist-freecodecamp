import React from "react";

function TaskForm(){
    return(
        <form className="task-form">
            <input className="task-input" type="text" placeholder="Escribe una Tarea" name="text" />
        </form>
    )
}
export default TaskForm