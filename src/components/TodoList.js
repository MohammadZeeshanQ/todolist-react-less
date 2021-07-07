import React from 'react'
import '../styles/TodoList.css'

export default function TodoList({ inputArray, todo, todoArray }) {

    console.log(inputArray);

    return (
        <div>
            {inputArray.map((item, index) =>
                <div key={index} >
                    <div>{item.text}</div>
                    <div>{item.id}</div>
                </div>
            )}
        </div>
    )
}
