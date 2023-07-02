import React from "react";
import '../components-styles/task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
function Task ({text, complete, id, completeTask, deleteTask}){
    return (
        <div className={complete ? 'task-container completed' : 'task-container'}>
            <div classname="task-text" onClick={()=>completeTask(id)}>
                {text}
            </div>
            <div className="icon-container" onClick={()=>deleteTask(id)}>
                <AiOutlineCloseCircle className="icon"/>
            </div>
        </div>
    )
}
export default Task;