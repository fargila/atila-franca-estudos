import Task from "./Task"

const TaskList = ({ tasks, onDeleteTask, onToggleDone }) => {
  
    if(tasks.length ===0) { 
        return <p>Não há tarefas para fazer.</p> 
        }
  
    return (
    <div>
        {tasks.map((task) => (
            <Task key={task.id} 
            task={task} 
            onDelete={()=> onDeleteTask(task.id)} 
            onToggleDone={() => onToggleDone(task.id)}/>
        ))}
    </div>
  )
}

export default TaskList
