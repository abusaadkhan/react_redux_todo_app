import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,clearTodo } from "../features/todoSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodos(){
    const dispatch = useDispatch()
    const [todo,setTodo] = useState('')

    const handleAdd = (e) => {
        dispatch(addTodo(todo))
        setTodo(" ")
        e.preventDefault()
    }

    const handleClear = (e) => {
        dispatch(clearTodo())
        e.preventDefault()
    }

    const notify = (e) => {
        toast.error("Please write something before adding!")
        e.preventDefault()
    }
    return(
        <div>
            <ToastContainer/>
            <form>
                <input className="bg-gray-200 m-3 h-8" type="text" value={todo}
                onChange={(e) => setTodo(e.target.value) } /> 
                
                <button className=" bg-blue-600 rounded-sm text-white px-2 py-1 mr-3" onClick={todo!==" "? handleAdd : notify} >Add</button>
                <button className=" bg-red-900 rounded-sm text-white px-2 py-1" onClick={handleClear} >clear</button>
            </form>
        </div>
    )
}

export default AddTodos