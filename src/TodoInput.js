import React from 'react';

const TodoInput = (props) => {
    let inputValue = ''
    function send(){
        props.addTodo(inputValue)
        document.getElementById('input').value = ''
    }
    return (
        <div>
            <input id="input" onChange={(e)=>{inputValue = e.target.value}}/>
            <button onClick={send}>add</button>
        </div>
    );
}

export default TodoInput;
