import React, { useEffect } from 'react'
import TodoObject from './TodoObject.js';

export default function TodoList({ inputArray, setInputArray }) {

    return (
        <div >
            {inputArray.map((item, index) =>
                <TodoObject
                    key={index}
                    inputArray={inputArray}
                    setInputArray={setInputArray}
                    item={item}
                />
            )}
        </div >
    )
}
