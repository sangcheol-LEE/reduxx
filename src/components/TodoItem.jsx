import React from 'react';
import { toggle, remove } from '../modules/todos';
import { useDispatch } from 'react-redux';

const TodoItem = ({todo}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <form>
        <input type="checkbox"
           onClick={() => dispatch(toggle(todo.id))}
           checked={todo.done}
           readOnly={true}
        />
        <span style={{ textDecoration : todo.done ? "line-through" : "none"}}>{todo.text}</span>
        <button onClick={()=> dispatch(remove(todo.id))}>remove</button>
      </form>
    </div>
  );
};

export default TodoItem;