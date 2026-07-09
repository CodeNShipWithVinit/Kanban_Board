import {useState} from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {

  const [title,setTitle]=useState("");
  const [status,setStatus]=useState("ToDo");
  const [todos,setTodos]=useState([]);

  const handleTodo=()=>{
    const newTodo={
      id:Date.now(),
      title,
      status
    }
    if(newTodo.title.trim()==="")
    {
      return;
    }
    setTodos(prev=>[...prev,newTodo]);
    setTitle("");
    setStatus("ToDo");
  }

  const removeTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  }

  return (
    <div>
      <h1 className="text-5xl text-center m-3 font-extrabold text-amber-500">React Kanban Board</h1>
      <div className="flex gap-2 justify-center m-6">
        <input className="bg-amber-50 rounded-md px-3 py-1 outline-none" onChange={(e)=>setTitle(e.target.value)} type="text" value={title} placeholder="Add a new task..." />

        <select className="bg-amber-50 rounded-md px-3 py-1 outline-none" value={status} name="" onChange={(e)=>setStatus(e.target.value)}>
          <option value="ToDo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button className="bg-amber-400 rounded-md px-3 py-1 text-amber-100 font-bold active:scale-95 cursor-pointer" onClick={handleTodo}>Add task</button>
      </div>

      <div className="flex justify-center gap-3">
        <div className="bg-gray-900 min-h-60 w-80 rounded-md">
          <div className="bg-blue-700 w-full h-10 rounded-md"><h1 className="font-bold text-white text-center">Todo</h1></div>
          {todos.filter(todo=>todo.status==="ToDo").map(todo=>(
            <Todo key={todo.id} id={todo.id} title={todo.title} removeTodo={removeTodo}/>
          ))}
          
        </div>
        <div className="bg-gray-900 min-h-60 w-80 rounded-md">
          <div className="bg-amber-400 w-full h-10 rounded-md"><h1 className="font-bold text-white text-center">In Progress</h1></div>
          {todos.filter(todo=>todo.status==="InProgress").map(todo=>(
            <Todo key={todo.id} id={todo.id} title={todo.title} removeTodo={removeTodo}/>
          ))}
        </div>
        <div className="bg-gray-900 min-h-60 w-80 rounded-md">
          <div className="bg-green-600 w-full h-10 rounded-md"><h1 className="font-bold text-white text-center">Done</h1></div>
          {todos.filter(todo=>todo.status==="Done").map(todo=>(
            <Todo key={todo.id} id={todo.id} title={todo.title} removeTodo={removeTodo}/>
          ))}
        </div>
      </div>
      console.log("Debugging");
    </div>
  )
}

export default App