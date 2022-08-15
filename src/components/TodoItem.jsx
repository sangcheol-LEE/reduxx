import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
  console.log(todo)
  return (
    <div>
      <form>
        <input type="checkbox"
           onClick={() => onToggle(todo.id)}
           checked={todo.done}
           readOnly={true}
        />
        <span style={{ textDecoration : todo.done ? "line-through" : "none"}}>{todo.text}</span>
        <button onClick={()=> onRemove(todo.id)}>remove</button>
      </form>
    </div>
  );
};

export default TodoItem;