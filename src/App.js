import './App.css';
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import About from "./myComponents/About";
import Todo from "./myComponents/Todo";
import React, { useState, useEffect } from 'react';
import AddTodo from './myComponents/AddTodo';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let todoObj;
  if (localStorage.getItem("todos") === null) {
    todoObj = [];
  }
  else {
    todoObj = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todosEle) => {
    console.log("I am delete", todosEle);
    setTodosEle(todosArray.filter((e) => {
      return e !== todosEle;
    }));
    localStorage.setItem("todos", JSON.stringify(todosArray));
  }

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todosArray.length === 0) {
      sno = 0;
    }
    else { sno = todosArray[todosArray.length - 1].sno + 1; }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodosEle([...todosArray, myTodo]);
    console.log(myTodo);
  };

  const [todosArray, setTodosEle] = useState(todoObj);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosArray));
  }, [todosArray]);

  return (
    <>
      <BrowserRouter>
        <Header title="My Todo List" searchBar={false} />
        <Routes>
          <Route path="/" element={<><AddTodo addTodo={addTodo} /><Todo todosArray={todosArray} onDelete={onDelete} /></>}/>
         
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
