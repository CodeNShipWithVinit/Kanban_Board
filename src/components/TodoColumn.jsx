import TaskCard from './TaskCard'

const TodoColumn = ({title,status,tasks,handleDelete}) => {
  return (
    <div className="bg-gray-900 min-h-60 w-80 rounded-md">
          <div className="bg-blue-700 w-full h-10 rounded-md"><h1 className="font-bold text-white text-center">{title}</h1></div>
          {
            tasks.map((task,index)=>task.status===status && (
                <TaskCard key={index} title={task.title} handleDelete={handleDelete} index={index}/>
            ))
          }
          
    </div>
  )
}

export default TodoColumn