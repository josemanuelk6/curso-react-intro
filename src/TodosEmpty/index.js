import React from "react";
import '../TodosError/todosError.css'
import { TodoContext } from "../TodoContext";

function TodosEmpty () {

const {totalTodos} = React.useContext(TodoContext);
    return (
        <div className="card">
            {!totalTodos && <h2>¡Añade alguna tarea!</h2>}
            {totalTodos && <h2>No hay ninguna coincidencia</h2>}
       </div>
    )
}

export {TodosEmpty};