import React from 'react'
import '../styles/InputForm.css'

export default function InputForm({ inputText, setInputText, inputArray, setInputArray }) {

    const submitHandler = (e) => {
        e.preventDefault();
        setInputArray([
            ...inputArray,
            { text: inputText, completed: 'false', id: Math.random() * 10, }
        ]);
        setInputText('');
    };

    const inputHandler = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <form className='form-wrapper'>
                    <input className='form-input' type='text' value={inputText} onChange={inputHandler} placeholder='Enter task' />
                    <button type='submit' className='form-submit' onClick={submitHandler}>Add</button>
                </form>
            </div>
        </div>
    )
}
