import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completedTodos, 
        totalTodos
    } = React.useContext(TodoContext);

   
    if(completedTodos!=totalTodos){
    
    return(
        <h1>
            Has completado {completedTodos} de {totalTodos} ToDos
        </h1>
    );} else {
        return (
            <h1>
                ¡¡Enhorabuena, no tienes tareas pendientes!!
            </h1>
        )
    }
}

export {TodoCounter};