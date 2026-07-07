import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="text-5xl text-center m-3 font-extrabold text-amber-500">React Kanban Board</h1>
      <div className="flex gap-2 justify-center m-6">
        <input className="bg-amber-50 rounded-md px-3 py-1" type="text" placeholder="Add a new task..." />

        <select className="bg-amber-50 rounded-md px-3 py-1" name="" id="">
          <option value="ToDo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button className="bg-amber-400 rounded-md px-3 py-1 text-amber-100 font-bold active:scale-95">Add task</button>
      </div>
    </div>
  )
}

export default App