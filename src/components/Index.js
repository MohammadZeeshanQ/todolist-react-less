import React, { useState, useEffect } from 'react'
import InputForm from './InputForm.js'
import TodoList from './TodoList.js'
import '../styles/IndexSecond.css'

export default function Index() {
    const [inputText, setInputText] = useState('');
    const [inputArray, setInputArray] = useState([]);
    const [taskStatus, setTaskStatus] = useState('all');
    const [todoArray, setTodoArray] = useState([]);


    useEffect(() => {
        console.log(inputArray);
        console.log(taskStatus);
    }, [inputArray, taskStatus]);


    return (
        <div className='index-container'>

            <div className='hero-header' style={{ textAlign: 'center', paddingTop: '4rem ', }}>
                <h1 style={{ color: '#fcfcfc' }}>Todo List</h1>
            </div>

            <InputForm
                inputText={inputText}
                setInputText={setInputText}
                inputArray={inputArray}
                setInputArray={setInputArray}
                setTaskStatus={setTaskStatus}
            />

            <TodoList
                inputArray={inputArray}
                setInputArray={setInputArray}
            />
        </div>
    )
}
