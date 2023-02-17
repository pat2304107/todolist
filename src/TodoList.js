import React, {useState} from 'react';
import './TodoList.css';

const TodoList = ({todo, remove, setTodos}) => {
    const {title, uuid, checked} = todo;
    const [isSave, setIsSave] = useState(true);

    const checkHandler = (id) => {
        setTodos(cur => {
            return cur.map(ele => {
                if(ele.uuid === id)return {...ele, checked: !ele.checked};
                return ele;
            })
        })
    }
    const titleHandler = () => {
        if(isSave){
            return <div className={checked ? "Checked": ""}>{title}</div>
        } else {
            return <input value={title} onChange={e => valueHandler(e.target.value)}></input>
        }
    }

    const valueHandler = (value) => {
        setTodos(cur => {
            return cur.map(ele => {
                return {...ele, title: value};
            })
        })
    }

    const editHandler = () => {
        setIsSave(!isSave)
    }

    const editBtn=() => {
        return (isSave ? 'edit' : 'save')
    }



    return (
        <div className='listContainer'>
            <input type="checkbox" onChange={e => checkHandler(uuid)} checked={checked}></input>
            {titleHandler()}
            <button onClick={e => remove(uuid)}>delete</button>
            <button onClick={e => editHandler()}>{editBtn()}</button>
        </div>
    );
}


export default TodoList;
