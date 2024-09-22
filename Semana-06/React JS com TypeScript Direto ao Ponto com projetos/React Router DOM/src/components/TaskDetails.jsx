import { useParams } from "react-router-dom"

useParams

const TaskDetails = () => {
    const {taskId} = useParams()
  return (
    <div>
      <h2>Detalhes </h2>
      <p>A tarefa: {taskId}</p>
    </div>
  )
}

export default TaskDetails
