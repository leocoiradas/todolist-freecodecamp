import React from "react";
import '../components-styles/task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
function Task ({text, complete}){
    return (
        <div className={complete ? 'task-container completed' : 'task-container'}>
            <div classname="task-text">
                {text}
            </div>
            <div className="icon-container">
                <AiOutlineCloseCircle className="icon"/>
            </div>
        </div>
    )
}
export default Task;