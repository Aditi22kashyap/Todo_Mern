import React from 'react'
import { useState } from 'react';
function TodoForm() {
const [text,setText]= useState("");

const onFormSubmit = () => {
      
}

const onInputChange =(e)=> {
console.log(e.traget.value);
setText(e.traget.value);
}

  return (
    <div>
        <form className='form' onSubmit={onFormSubmit}>
            <input placeholder='Enter new Todo'
                   className='input'
                   onChange={onInputChange}
        />

                   
        </form>
    </div>
  )
}

export default TodoForm