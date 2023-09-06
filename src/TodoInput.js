import React, {useState, useEffect} from 'react';
import plus from './assets/img/plus.svg';

const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState('');
    function send(){
        addTodo(value)
        setValue('')
    }
    useEffect(() => {
        console.log('hello')
    }, [])
    return (
        <div className="mx-auto mt-18 h-9_5 w-143_5 bg-lightgray100 p-2 flex justify-between">
            <input className="bg-transparent h-5 w-131 text-white focus:outline-none focus:shadow-none placeholder-lightgray10 focus:placeholder-lightgray50" placeholder="請輸入內容" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
            <button className="w-5 h-5 bg-lightgray10" onClick={send}>
                <img className='mx-auto' src={plus} alt=""></img>
            </button>
        </div>
    );
}

export default TodoInput;