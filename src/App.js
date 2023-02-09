import { useState } from 'react';
import TodoInput from './TodoInput'
import TodoPage from './TodoPage';
import React from 'react'

function App(){
  function addTodo(todo){
    setNewTodo(arr => [todo, ...arr])
  }
  function remove(index){
      const oldItems = newTodo 
      const newItems = oldItems.slice(0,index).concat(oldItems.slice(index+1))
      setNewTodo(newItems) 
  }
  const [newTodo, setNewTodo] = useState([]);
  return(
    <div>
      <TodoInput addTodo={addTodo}/>
      <TodoPage newTodo={newTodo} remove={remove}/>
    </div>
  )
}

export default App;
