import React, {useState, useRef, useEffect} from 'react';

const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState('');
    function send(){
        addTodo(value)
        setValue('')
    }
    useEffect(() => {
        console.log('hello')
    }, [])
    const ref = useRef("")
    return (
        <div>
            <input ref={ref} onChange={(e)=>{setValue(e.target.value)}} value={value}/>
            <button onClick={send}>add</button>
            {ref.current.value}
        </div>
    );
}

export default TodoInput;