import React, { useState } from "react";
import {useDispatch,useSelector,  } from 'react-redux'
import { editTodo, removeTodo } from "../features/todoSlice";


function Todos(){
   const [editid, setEditid] = useState('')
   const [todotext, setTodotext] = useState('')
   const todos = useSelector((state) => state.todos.todos)
   const dispatch = useDispatch()

   const handleEdit = (e) => {
    const todo = {
        id:editid,
        text: todotext
    }
    dispatch(editTodo(todo))
    e.preventDefault()
    setEditid('')
   }
   const handleEditBtn = (todo) => {
    setEditid(todo.id)
    setTodotext(todo.text)
   }
    return(
        <div>
            <ul>
                {
                    todos.map((todo) => (
                        <div  key={todo.id} className="flex justify-between w-[400px] my-2 ">
                            {editid===todo.id? 
                                (<input className="bg-gray-200  h-8 m-0" type="text" value={todotext} onChange={(e) => setTodotext(e.target.value)} onBlur={handleEdit}  />) :  
                                (<li className="mr-10">{todo.text}</li>) 
                            }

                            <div>
                            <button className="mr-2 bg-red-600 rounded-sm text-white px-2 py-1 " onClick={() => (
                                dispatch(removeTodo(todo.id))
                            )}>delete</button>

                            <button className="mr-2 bg-green-600 rounded-sm text-white px-2 py-1" onClick={() =>handleEditBtn(todo) } >edit</button>
                            </div>
                        </div>
                    ))
                }
            </ul>
           
        </div>
    )
}

export default Todos