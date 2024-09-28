import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    list: Todo[];
    filter: 'all' | 'completed' | 'active';
}

const initialState: TodoState = {
    list: [],
    filter: 'all',
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            }
            state.list.push(newTodo)
        },
        toggleTodo: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload)
        },
        filterTodos: (state, action) => {
            state.filter = action.payload
        }
    },
})

export const { addTodo, toggleTodo, removeTodo, filterTodos } = todoSlice.actions
export default todoSlice.reducer
