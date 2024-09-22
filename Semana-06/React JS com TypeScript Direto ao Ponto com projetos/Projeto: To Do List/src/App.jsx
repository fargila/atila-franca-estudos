import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: task, done: false }
    ])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskDone = (taskid) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskDone = {toggleTaskDone}/>
      
    </>
  )
}

export default App
