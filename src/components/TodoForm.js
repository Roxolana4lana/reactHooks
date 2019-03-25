import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
    const [value,setValue] = useState('')
    const handleSubmit =e=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue('')
    }
  return (
<form onSubmit={handleSubmit}>
<input type='text' value={value} onChange={e=>setValue(e.target.value)}/>
<button>Add</button>
</form>
  )
}
