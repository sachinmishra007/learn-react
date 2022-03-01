import React, { useEffect, useState } from 'react'

const TodoInput = ({ onSubmit, itemInfo }) => {
    const [editMode, setEditMode] = useState(false);
    const [todo] = useState({
        itemName: React.createRef()
    });

    useEffect(() => {
        if (itemInfo && itemInfo.itemName !== undefined) {
            setEditMode(true);
            todo.itemName.current.value = itemInfo.itemName;
            return;
        }
    }, [itemInfo]); // eslint-disable-line react-hooks/exhaustive-deps



    const handleChange = (event) => {

    }

    const onClick = () => {
        let value = todo.itemName.current.value;
        if (!editMode) {
            onSubmit({ itemName: value }, 'Add');
        }
        else {
            onSubmit({ itemName: value, itemId: itemInfo.itemId }, 'Update');
            value !== '' && setEditMode(false);
        }
        todo.itemName.current.value = '';

    }

    return (
        <>
            <div className='todo-input'>
                <input className='input' ref={todo.itemName} onChange={handleChange} name='todoItem'></input>
                <div className='button' onClick={onClick} >{editMode ? 'Update' : 'Add'}</div>
            </div>
        </>
    )
}

export default TodoInput;