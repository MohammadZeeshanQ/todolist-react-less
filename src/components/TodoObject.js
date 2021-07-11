import React from 'react'
import '../styles/TodoList.css'


export default function TodoObject({ item, inputArray, setInputArray }) {


    const deleteHandler = () => {

        console.log('deleteHandler');
        setInputArray(inputArray.filter((element) =>
            element.id !== item.id
        ))
    };


    const completeHandler = () => {
        console.log('completeHandler');
        setInputArray(inputArray.map((element) => {
            if (element.id === item.id) {
                return {
                    ...element,
                    completed: !element.completed
                }
            }
            return element;
        }))
    };


    return (
        <div className='todo-container'>
            <div className='todo-wrapper' >

                <div className='todo-text-container'>
                    {item.text}
                </div>
                <div className='todo-text-container'>
                    {item.id}
                </div>

                <button className='todo-delete-container' onClick={deleteHandler}>
                    <i className="far fa-trash-alt todo-delete-icon"></i>
                </button>

                <button className='todo-done-container' onClick={completeHandler}>
                    <i className="fas fa-check todo-done-icon"></i>
                </button>

            </div>
        </div>
    )
}
