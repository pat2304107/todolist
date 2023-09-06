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
            return <div className={`pl-3 ${checked ? "text-lightgray50": "text-lightgray10"}`}>{title}</div>
        } else {
            return <input className="pl-3 w-full bg-transparent text-lightgray10 focus:outline-none focus:shadow-none" value={title} onChange={e => valueHandler(e.target.value)}></input>
        }
    }

    const valueHandler = (value) => {
        setTodos(cur => {
            return cur.map((ele) => {
                if (ele.uuid === uuid) {
                  return { ...ele, title: value }; // 只更新指定的待辦事項
                }
                return ele;
            });
        })
    }

    const editHandler = () => {
        setIsSave(!isSave)
    }



    return (
        <div className='mx-auto w-238_5 flex text-lightgray10 border-1 border-white'>
            <input className={`w-7_5 h-7_5 bg-lightgray100 border-2 border-white appearance-none ${checked === true ? 'checked' : ''}`} type="checkbox" onChange={e => checkHandler(uuid)} checked={checked}></input>
            <div className='w-216 h-7_5 bg-lightgray100 border-2 border-white'>{titleHandler()}</div>
            <button className={`w-7_5 h-7_5 bg-lightgray100 border-2 border-white ${isSave ? 'edit' : 'save'}`}  onClick={e => editHandler()}></button>
            <button className=' w-7_5 h-7_5 bg-lightgray100 border-2 border-white delete' onClick={e => remove(uuid)}></button>
        </div>
    );
}


export default TodoList;
