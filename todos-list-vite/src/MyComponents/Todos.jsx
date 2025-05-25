import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className='container text-center mx-auto '>
      <h3 className="mx-5 text-xl font-bold mb-4">Todos List</h3>
      
      {props.todos.length === 0 ? "No Todos to Display" : props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}

    </div>
  )
}

export default Todos
