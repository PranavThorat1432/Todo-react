import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={()=>{onDelete(todo)}}>
        Delete
      </button>

    </div>
  )
}

export default TodoItem
