import React from "react"

interface Task {
    id: number
    title: string
}

interface TaskListProps {
    array: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ array }) => {
  return (
    <div>
        {(array.length===0) ? <div>Não há elementos dentro da lista!</div> : <ul>
            {array.map((task, index) => (
                <li key={index}>{task.id} - {task.title}</li>
            ))}
        </ul>}
    </div>
  )
}

export default TaskList
