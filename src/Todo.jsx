import React from 'react'
import {BiTrash} from 'react-icons/bi'

const style = {
    list:`flex justify-between bg-blue-300 m-6 p-4 rounded cursor-pointer`,
    row : `flex`,
    text: `flex dark text-lg text-black ml-4`,
    textDone : `flex dark text-black ml-4 line-through`,
    listDone:`flex justify-between bg-blue-100 m-6 p-4 rounded cursor-pointer`
}

const Todo = ({todo,toggleComplete,deleteTodo}) => {
  return (
    <li className={todo.completed ? style.listDone:style.list}>
        <div className={style.row}>
            <input onChange={()=>toggleComplete(todo)} type="checkbox" checked={todo.completed? 'checked':''} />
            <p onClick={()=>toggleComplete(todo)} className={todo.completed ? style.textDone : style.text}>{todo.text}</p>
        </div>
        <button onClick={()=>deleteTodo(todo.id)}><BiTrash  size={20}/></button>
    </li>
  )
}

export default Todo
