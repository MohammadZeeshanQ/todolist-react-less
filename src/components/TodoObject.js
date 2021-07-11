import React, { useState, useEffect } from 'react'
import '../styles/TodoList.css'


export default function TodoObject({ item, inputArray, setInputArray }) {

    const [statusIcon, setStatusIcon] = useState('todo-done-icon');

    useEffect(() => {

    }, [setInputArray]);

    const deleteHandler = () => {

        console.log('deleteHandler');
        setInputArray(inputArray.filter((element) =>
            element.id !== item.id
        ))
    };


    const completeHandler = () => {

        console.log('completeHandler');

        // complete indicator
        changeButtonStatus();

        // change complete Status
        setInputArray(inputArray.map((element) => {
            if (element.id === item.id) {
                return {
                    ...element,
                    completed: !element.completed
                }
            }
            return element;
        }));
    };


    const changeButtonStatus = () => {
        if (statusIcon === 'todo-done-icon') {
            setStatusIcon('todo-done-icon-done');
            console.log('done');
        }
        else if (statusIcon === 'todo-done-icon-done') {
            setStatusIcon('todo-done-icon');
            console.log('undone');
        }
        else {
            setStatusIcon('todo-done-icon');
            console.log(3);
        }
    }


    return (
        <div className='todo-container'>
            <div className='todo-wrapper' >

                <div className='todo-text-container'>
                    <h4 style={{ color: '#009FFD' }}>
                        {item.text}
                    </h4>
                </div>

                <button className='todo-delete-container' onClick={deleteHandler}>
                    <i className="far fa-trash-alt todo-delete-icon"></i>
                </button>

                <button className='todo-done-container'
                    onClick={completeHandler}
                >
                    <i className={`fas fa-check ${statusIcon}`}></i>
                </button>

            </div>
        </div>
    )
}
