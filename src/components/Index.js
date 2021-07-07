import React, { useState, useEffect } from 'react'
import InputForm from './InputForm.js'
import TodoList from './TodoList.js'
import '../styles/Index.css'

export default function Index() {
    const [inputText, setInputText] = useState('');
    const [inputArray, setInputArray] = useState([]);
    const [todo, setTodo] = useState('');
    const [todoArray, setTodoList] = useState([]);

    useEffect(() => {
        console.log(inputArray);
    }, [inputArray]);

    return (
        <div className='index-container'>
            <InputForm
                inputText={inputText}
                setInputText={setInputText}
                inputArray={inputArray}
                setInputArray={setInputArray}
            />
            <TodoList
                inputArray={inputArray}
                todo={todo}
                todoArray={todoArray}
            />
        </div>
    )
}
