import React, {useState} from "react";
import TaskForm from "./TaskForm";
import '../components-styles/tasklist.css'
import Task from "./TaskCreate";
function TaskList (){
    const [tasks, setTask] = useState([]);
    const addTask = (task) =>{
        if (task.text.trim()){
            task.text = task.text.trim()
            const taskUpdated = [task, ...tasks];
            setTask(taskUpdated);
        }
    }
    return (
        <>
        <TaskForm onSubmit={addTask}/>
        <div className="list-container"> 
            {
                tasks.map((task) => <Task text={task.text} complete={task.complete} key={task.id} id={task.id} />)
            }
        </div>
        
        </>
    )
}
export default TaskList