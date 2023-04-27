import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : []
}

export const todoSlice =  createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            };
            state.todos.push(todo)
            console.log("addtodo state,action value:",state,action);
            
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        },
        editTodo : (state,action) => {
           
            state.todos.map((todo) => (
                todo.id === action.payload.id? todo.text=action.payload.text : ""
                
            ))
        },
        clearTodo : (state) => {
            state.todos = []
        },
    }
})

export const {addTodo,removeTodo,editTodo,clearTodo} = todoSlice.actions
export default todoSlice.reducer