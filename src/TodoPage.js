import React, {useState} from 'react';
import TodoList from './TodoList'
import "./TodoPage.css"


const TodoPage = ({todos, remove, setTodos}) => {
    const [status, setStatus] = useState("all")
    return (
        <div className='pt-9'>
            <div className='mx-auto mb-9 w-70_5 text-xl text-white font-bold'>
                <button className={`w-28_5 h-11 border-2 ${status === 'all' ? 'bg-lightgray100' : 'bg-lightgray50'}`} onClick={e => setStatus('all')}>ALL</button>
                <button className={`w-28_5 h-11 border-2 ${status === 'todo' ? 'bg-lightgray100' : 'bg-lightgray50'}`} onClick={e => setStatus('todo')}>TODO</button>
                <button className={`w-28_5 h-11 border-2 ${status === 'done' ? 'bg-lightgray100' : 'bg-lightgray50'}`} onClick={e => setStatus('done')}>DONE</button>
            </div>
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

