
const TaskCard = ({title,handleDelete,index}) => {
  return (
    <div draggable key={index} className="bg-gray-800 text-white w-[90%] h-auto m-2 rounded-md p-2 flex justify-between cursor-grab taskCard">
        <div className="min-w-0 wrap-break-word w-[80%]">
            {title}
        </div>
        <div>
            <button className="text-gray-500 cursor-pointer" onClick={()=>handleDelete(index)}>x</button>
        </div>
    </div>
  )
}

export default TaskCard;