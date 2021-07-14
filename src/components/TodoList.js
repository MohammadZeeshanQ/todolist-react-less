import React from 'react'
import TodoObject from './TodoObject.js';

export default function TodoList({ inputArray, setInputArray, taskArray }) {

    return (
        <div >
            {taskArray.map((item, index) =>
                <TodoObject
                    key={index}
                    inputArray={inputArray}
                    setInputArray={setInputArray}
                    item={item}
                    taskArray={taskArray}
                />
            )}
        </div >
    )
}
