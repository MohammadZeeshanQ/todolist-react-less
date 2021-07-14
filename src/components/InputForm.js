import React from 'react'
import '../styles/InputForm.css'

export default function InputForm({ inputText, setInputText, inputArray, setInputArray, setTaskStatus }) {


    const submitHandler = (e) => {
        e.preventDefault();
        setInputArray([
            ...inputArray,
            { text: inputText, status: false, id: parseInt(Math.random() * 1000), }
        ]);
        setInputText('');
    };


    const inputHandler = (e) => {
        setInputText(e.target.value);
    };

    const statusHandler = (e) => {
        setTaskStatus(e.target.value);
    }


    return (
        <div className='form-container'>
            <div className='form-wrapper'>

                <form className='form-div'>
                    <input className='form-input' type='text' value={inputText} onChange={inputHandler} placeholder='Enter task' />
                    <button type='submit' className='form-submit' onClick={submitHandler}>
                        <i class="fas fa-plus"></i>
                    </button>
                </form>

                <div className='form-dropDown-container'>
                    <select className='form-dropDown' onChange={statusHandler}>
                        <option className='form-dropDown-option' value='all'>All</option>
                        <option className='form-dropDown-option' value='complete'>Completed</option>
                        <option className='form-dropDown-option' value='pending'>Pending</option>
                    </select>
                </div>
            </div>
        </div >
    )
}
