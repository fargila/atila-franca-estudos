import { configureStore } from "@reduxjs/toolkit"
import todoReduder from './slices/todoSlice'

export const store = configureStore({
    reducer: { todos: todoReduder }
})