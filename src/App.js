import { useState } from 'react';
import TodoInput from './TodoInput'
import TodoPage from './TodoPage';
import React from 'react'

function App(){
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(arr => [{
      title: todo,
      checked: false,
      uuid: window.crypto.randomUUID(),
    }, ...arr]);
  }

  const remove = (id) => {
    setTodos(cur => cur.filter(todo => todo.uuid !== id))
  }

  return(
    <div className='font-inter'>
      <TodoInput addTodo={addTodo}/>
      <TodoPage todos={todos} remove={remove} setTodos={setTodos}/>
    </div>
  )
}

export default App;
