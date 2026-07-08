
const Todo = ({title,id,removeTodo}) => {
  return (
    <div className="bg-gray-800 text-white w-[90%] h-auto m-2 rounded-md p-2 flex justify-between">
        <div className="min-w-0 wrap-break-word w-[80%]">
            {title}
        </div>
        <div>
            <button className="text-gray-500 cursor-pointer" onClick={()=>removeTodo(id)}>x</button>
        </div>
    </div>
  )
}

export default Todo