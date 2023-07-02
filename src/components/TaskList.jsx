import React, {useState} from "react";
import TaskForm from "./TaskForm";
import '../components-styles/tasklist.css'
function TaskList (){
    const [task, setTask] = useState([]);
    return (
        <>
        <TaskForm />
        <div className="list-container"> 

        </div>
        
        </>
    )
}
export default TaskList