import React, {useState} from 'react';
import TodoList from './TodoList'
import "./TodoPage.css"


const TodoPage = ({todos, remove, setTodos}) => {
    const [status, setStatus] = useState("all")

    return (
        <div>
            <button onClick={e => setStatus('all')} >all</button>
            <button onClick={e => setStatus('todo')}>todo</button>
            <button onClick={e => setStatus('done')}>done</button>
            {todos.filter(todo => {
                if(status === "all") return todo;
                if(status === "todo" && todo.checked === false) return todo;
                if(status === "done" && todo.checked === true)return todo;
            }).map(todo => (
                <TodoList key={todo.uuid} todo={todo} remove={remove} setTodos={setTodos} />
            ))}
            {/* {todos.map(todo => (
                <TodoList todo={todo} remove={remove} setTodos={setTodos} />
            ))} */}
        </div>
    );
}

export default TodoPage;

