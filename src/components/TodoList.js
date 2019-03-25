import React, { useState } from 'react'
import TodoTask from './TodoTask';
import TodoForm from './TodoForm';

function TodoList(){
    const [todos, setTodos] = useState([{text:'sqqs', isDone:false}])
    const addTodo = text =>{
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }
    const setDone = index =>{
        const newTodos = [...todos]
        newTodos[index].isDone = true
        setTodos(newTodos)
    }

    const deleteTodo = index =>{
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    
    return(
        <div>
            {todos.map((todo, index)=>(
                <TodoTask key={index} index={index} todo={todo} 
                deleteTodo={deleteTodo} setDone={setDone}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}
export default TodoList