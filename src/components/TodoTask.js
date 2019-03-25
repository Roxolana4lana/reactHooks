import React, { useState } from 'react'

export default function TodoTask({todo,index, setDone, deleteTodo}) {

  return (
    <div style={{textDecoration:todo.isDone?'line-through':''}}>
      {todo.text}
      <button onClick={()=>setDone(index)}>complete</button>
      <button onClick={()=>deleteTodo(index)}>delete</button>
    </div>
  )
}
