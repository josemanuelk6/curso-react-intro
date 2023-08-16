import'./CreateTodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContext';
function CreateTodoButton(){
  const {setOpenModal} = React.useContext(TodoContext);
  return (
    <button className='createtodo-button' onClick={
              ()=>{ 
              setOpenModal(state => !state);
              }}>

    </button>
  )
}

export {CreateTodoButton};