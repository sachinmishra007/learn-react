import { faCircleCheck, faCircleMinus, faPencil, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TodoList = ({ todoList, onOperation }) => {    
    const onClick = (event, operation) => {
        onOperation(event, operation);
    }

    return (
        <>
            <div className='todo-list'>
                <ul>
                    {

                        todoList.map((value, key) => {
                            return <li key={value.itemId} className={value.isComplete ? 'item-complete' : ''}>
                                {
                                    value.isComplete && <div className='complete'>
                                    </div>
                                }
                                <div className='elipse' title={value.itemName}>
                                    {value.itemName}
                                </div>
                                <div className='list-op'>
                                    <FontAwesomeIcon onClick={() => onClick('edit', value)} title='Edit' icon={faPencil} />
                                    {!value.isComplete && <FontAwesomeIcon onClick={() => onClick('complete', value)} title='Complete' icon={faCircleCheck} />}
                                    {value.isComplete && <FontAwesomeIcon onClick={() => onClick('undo', value)} title='Undo' icon={faUndo} />}
                                    <FontAwesomeIcon onClick={() => onClick('delete', value)} title='Delete' icon={faCircleMinus} />
                                </div>
                            </li>
                        })

                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList