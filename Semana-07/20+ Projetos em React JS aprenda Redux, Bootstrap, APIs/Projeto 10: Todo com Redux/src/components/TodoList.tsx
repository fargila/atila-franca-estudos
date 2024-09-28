import { useSelector, useDispatch } from "react-redux"
import { toggleTodo, removeTodo, filterTodos } from "../slices/todoSlice"

interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoState {
  list: Todo[]
  filter: 'all' | 'completed' | 'incomplete'
}

type RootState = {
  todos: TodoState
};

const TodoList = () => {
  const dispatch = useDispatch()
  const { list, filter } = useSelector((state: RootState) => state.todos)
  
  const filteredList = list.filter((todo) => {
    if(filter === 'all') { return true }
    if(filter === 'completed') { return todo.completed }
    if(filter === 'incomplete') { return !todo.completed }

    return false
  })

    return (
      <div>
        <button onClick={() => dispatch(filterTodos('all'))}>Todas</button>
        <button onClick={() => dispatch(filterTodos('completed'))}>Completas</button>
        <button onClick={() => dispatch(filterTodos('incomplete'))}>Incompletas</button>
        <ul>
          { filteredList.map((todo) => (
            <li key={todo.id}>
              <span className={todo.completed ? 'line-trough' : ''} onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>Remover</button>
            </li>
          )) }
        </ul>
      </div>
  )
}

export default TodoList
