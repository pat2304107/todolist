import React from 'react';
import TodoList from './TodoList'
import "./TodoPage.css"


const TodoPage = (props) => {
    function showAll(){
        document.querySelectorAll('.listContainer').forEach((ele) => {ele.classList.remove('unshow')})
        console.log('all')
    }
    function showTodo(){
        document.querySelectorAll('.listContainer').forEach((ele) => {ele.classList.remove('unshow')})
        document.querySelectorAll('.listChecked').forEach((ele) => {ele.classList.add('unshow')})
        console.log('todo')
    }
    function showDone(){
        document.querySelectorAll('.listContainer').forEach((ele) => {ele.classList.add('unshow')})
        document.querySelectorAll('.listChecked').forEach((ele) => {ele.classList.remove('unshow')})
        console.log('done')
    }

    return (
        <div>
            <button onClick={showAll} >all</button><button onClick={showTodo}>todo</button><button onClick={showDone}>done</button>
            {props.newTodo.map((ele, index) => { return <TodoList newTodo={ele} index={index} remove={props.remove} /> })}
        </div>
    );
}

export default TodoPage;

