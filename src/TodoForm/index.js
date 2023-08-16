import React from "react";
import './todoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=> {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    };
    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
    <form onSubmit={onSubmit}>
        <label>Añade una tarea: </label>
        <textarea 
            placeholder="Hay algo nuevo por hacer..."
            value={newTodoValue}
            onChange={onChange}
            required
        />
        <button onClick={onCancel} className="TodoForm-button">Cancelar</button>
        <button type="submit" className="TodoForm-button">Añadir</button>
    </form>);
}

export {TodoForm};