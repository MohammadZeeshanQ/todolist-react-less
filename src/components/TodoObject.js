import React, { useState } from 'react'
import '../styles/TodoList.css'


export default function TodoObject({ item, inputArray, setInputArray, taskArray }) {

    const [complete, setComplete] = useState(false);


    // delete Task
    const deleteHandler = () => {
        setInputArray(inputArray.filter((element) =>
            element.id !== item.id
        ))
    };


    // completed Task 
    const completeHandler = () => {
        // complete indicator
        setComplete(!complete);
        // change complete Status
        setInputArray(inputArray.map((element) => {
            if (element.id === item.id) {
                return {
                    ...element,
                    status: !element.status
                }
            }
            return element;
        }));

    };



    return (
        <div className='todo-container'>
            <div className='todo-wrapper' >

                <div className='todo-text-container'>
                    <p className={item.status ? 'todo-text-header-done' : 'todo-text-header'}>
                        {item.text}
                    </p>
                </div>

                <button className='todo-delete-container' onClick={deleteHandler}>
                    <i className="far fa-trash-alt todo-delete-icon"></i>
                </button>

                <button className='todo-done-container'
                    onClick={completeHandler}
                >
                    <i className={item.status
                        ?
                        `fas fa-check todo-done-icon-done`
                        :
                        `fas fa-check todo-done-icon`}></i>
                </button>

            </div>
        </div>
    )
}
