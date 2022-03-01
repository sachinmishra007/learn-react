import React, { useState } from 'react'
import Message from '../message';
import TodoInput from './todo-input';
import TodoList from './todo-list';

const MainTodo = () => {
    // Intentionally Making the itemName as an empty array. 
    const [item, setItemName] = useState(undefined);
    const [config, setMessageConfig] = useState({
        color: 'green',
        display: false,
        message: ''
    });
   
    const [todoList, setTodoList] = useState([]);

    const onOperation = (event, operation) => {
        if (event === 'delete') {
            const todoItems = todoList.filter((value, key) => { return value.itemId !== operation.itemId })
            setTodoList(todoItems);
            item && operation.itemName === item.itemName && setItemName('');
        }
        else if (event === 'complete' || event === 'undo') {
            const todoItems = todoList.map((value, key) => { if (value.itemId === operation.itemId) { value.isComplete = (event === 'complete'); } return value; })
            setTodoList(todoItems);
        }
        else if (event === 'edit') {
            setItemName({ ...operation });
        }
    }

    const onAdd = (item, operation) => {
        if (item.itemName === '') {
            setMessageConfig({
                message: 'Please enter the To Do Name.',
                display: true,
                color: 'red',
                setDisplay: () => { setMessageConfig({ display: false }) }
            })
        }
        else {

            setMessageConfig({ display: false })
            if (operation === 'Add') {
                todoList.push({
                    itemId: Math.round(Math.random(Math.random()) * 10000, 1),
                    itemName: item.itemName,
                    isComplete: false
                });
            }
            else {
                todoList.map((value, key) => {
                    if (value.itemId === item.itemId) {
                        value.itemName = item.itemName
                    }
                    return value;
                })
            }
        }

    }



    return (
        <>
            <div className='title'> To Do</div >
            <Message config={config} />
            <TodoInput onSubmit={onAdd} itemInfo={item} />
            <TodoList todoList={todoList} onOperation={onOperation} />
        </>
    )
}

export default MainTodo;