import './TodoItem.css';
import { TodoIcon } from './TodoIcon';

function TodoItem({text, completed, onComplete,onDelete}){
  return (
    <li>
      <TodoIcon type='tick' color='green'
      onClick={onComplete}/>
      {/* <span className={`Icon-check Icon-check--active`} onClick={onComplete}>V</span> */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
        {text}
      </p>
      {/* <span onClick={onDelete}>X</span> */}
      <TodoIcon type='delete' color='red'
      onClick={onDelete}/>
    </li>
  )
}

export {TodoItem};