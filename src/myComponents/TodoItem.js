import React from 'react'

const TodoItem = ({todosEle,onDelete}) => {
  return (
    <div>
      <h4>{todosEle.title}</h4>
      <p>{todosEle.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todosEle)}}>Delete</button>
    </div>
  )
}

export default TodoItem
