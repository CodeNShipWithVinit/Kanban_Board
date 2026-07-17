
const Todo = ({todo,removeTodo,onDragStart}) => {
  return (
    <div onDragStart={()=>onDragStart(todo)} draggable className="bg-gray-800 text-white w-[90%] h-auto m-2 rounded-md p-2 flex justify-between">
        <div className="min-w-0 wrap-break-word w-[80%]">
            {todo.title}
        </div>
        <div>
            <button className="text-gray-500 cursor-pointer" onClick={()=>removeTodo(todo.id)}>x</button>
        </div>
        console.log("Debugging");
    </div>
  )
}

export default Todo