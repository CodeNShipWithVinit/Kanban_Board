import {useEffect, useState} from "react";
import "./App.css";
import TodoColumn from "./components/TodoColumn";

const App = () => {

  const oldTasks=localStorage.getItem("tasks");
  const [tasks,setTasks]=useState(JSON.parse(oldTasks) || []);
  const [taskData,setTaskData]=useState({
    title:"",
    status:"ToDo"
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setTaskData(prev=>(
      {...prev,
      [name]:value,
      }
    ))
  }

  const handleTask=()=>{
    console.log(taskData);
    if (!taskData.title.trim()) return;
    
    setTasks((prev)=>(
      [...prev,taskData]
    ));
    setTaskData({
      title:"",
      status:"ToDo"
    })
  }

  const handleDelete=(taskIndex)=>{
    const newTasks=tasks.filter((task,index)=>index!==taskIndex);
    setTasks(newTasks);
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  
  return (
    <div>
      <h1 className="text-5xl text-center m-3 font-extrabold text-amber-500">React Kanban Board</h1>
      <div className="flex gap-2 justify-center m-6">
        <input className="bg-amber-50 rounded-md px-3 py-1 outline-none" onChange={handleChange} name="title" type="text" value={taskData.title} placeholder="Add a new task..." />

        <select className="bg-amber-50 rounded-md px-3 py-1 outline-none" value={taskData.status} name="status" onChange={handleChange}>
          <option value="ToDo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button className="bg-amber-400 rounded-md px-3 py-1 text-amber-100 font-bold active:scale-95 cursor-pointer" onClick={handleTask}>+Add task</button>
      </div>

      <div className="flex justify-center gap-3">
        <TodoColumn title="ToDo" status="ToDo" tasks={tasks} handleDelete={handleDelete} /> 
        <TodoColumn title="InProgress" status="InProgress" tasks={tasks} handleDelete={handleDelete} /> 
        <TodoColumn title="Done" status="Done" tasks={tasks} handleDelete={handleDelete} /> 
      
      </div>

    </div>
  )
}

export default App