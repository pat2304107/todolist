import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    function remove(){
        props.remove(props.index)
    }
    function addCheck(){
        document.getElementById("text"+props.index).classList.toggle('Checked')
        document.getElementById('list'+props.index).classList.toggle('listChecked')
    }
    return (
        <div id={'list'+props.index} className='listContainer'>
            <input type="checkbox" onClick={addCheck}></input><div id={'text'+props.index}>{props.newTodo}</div><button onClick={remove}>delete</button>
        </div>
    );
}

export default TodoList;
