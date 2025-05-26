import './App.css';
import Header from "./MyComponents/Header.jsx";
import Todos from "./MyComponents/Todos.jsx";
import Footer from "./MyComponents/Footer.jsx";
import AddTodo from './MyComponents/AddTodo.jsx';
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e!==todo;    // xyz
    // return e.sno !== todo.sno;  // xyz
    }))
  };
  
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    const myTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market",
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym",
    },
    {
      sno: 3,
      title: "Go to the park",
      desc: "You need to go to the park",
    },
  ]);

  return (
    <>
    <Header title="MyTodos"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>

  );
}

export default App;

