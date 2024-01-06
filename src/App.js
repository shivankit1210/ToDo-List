import "./App.css";
import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useEffect, useState } from "react";

function App() { 
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (tod) => {
    console.log("Delete button clicked of todo >", tod);
    //  let index= todos.indexOf(tod);  // only work in js not in react, we have to use state function for that
    //  todos.splice(index,1)

    setTodos(
      todos.filter((e) => {
        return e !== tod;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };


  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  
  

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  
  }, [todos])

  return (
    <>
      <Header title="MY To-dos list" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
