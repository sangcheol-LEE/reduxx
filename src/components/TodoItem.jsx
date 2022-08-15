import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle, remove } from '../modules/todos';
const TodoItem = ({todo}) => {
  const dispatch = useDispatch()
  
  const {id, text, done} = todo
  return (
    <div>
      <form>
        <input type="checkbox" onClick={() => dispatch(toggle(id))}/>
        <span style={{textDecoration: done ? "line-through" : "none"}}>{text}</span>
        <button onClick={() => dispatch(remove(id))}>X</button>
      </form>
    </div>
  );
};

export default TodoItem;