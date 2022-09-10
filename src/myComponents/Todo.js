import React from 'react'
import  TodoItem  from "../myComponents/TodoItem";

const Todo = (props) => {
  let myStyle={
    minHeight:"80vh"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-4"> Todos List : </h3>
      {props.todosArray.length===0 ? "No todos to display" : props.todosArray.map((todosEle)=>{
            return (
            <>
            <TodoItem todosEle={todosEle} key={todosEle.sno} onDelete={props.onDelete}/>
            <hr/>
            </>)
      })}
    </div>
  )
}

 export default Todo
