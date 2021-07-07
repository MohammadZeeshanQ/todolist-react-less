import React, { useState, useEffect } from 'react'
import InputForm from './InputForm.js'
import TodoList from './TodoList.js'
import '../styles/Index.css'

export default function Index() {
    const [inputText, setInputText] = useState('');
    const [inputArray, setInputArray] = useState([]);
    const [todo, setTodo] = useState('');
    const [todoArray, setTodoList] = useState([]);

    return (
        <div className='index-container'>

        </div>
    )
}
