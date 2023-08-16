import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {TodosEmpty} from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './App.css';
import React from 'react';


function AppUi(){
    const {loading, error, searchedTodos, tickTodo, deleteTodo, openModal} = React.useContext(TodoContext);
    return (<React.Fragment>
      
      <TodoCounter/>
      <TodoSearch />

      <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos === 0) && <TodosEmpty/>}

            {searchedTodos.map(todo => (
                 <TodoItem 
                     key={todo.text} 
                     text={todo.text} completed={todo.completed}
                     onComplete={() => tickTodo(todo.text)}
                     onDelete={() => deleteTodo(todo.text)}/>
       ))}
        </TodoList>  
      
    

      <CreateTodoButton />
      
      {openModal && (
        <Modal>
         <TodoForm/>
      </Modal>
      )};
    </React.Fragment>
)};

export {AppUi};

