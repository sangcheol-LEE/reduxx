import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({todoText, todos, onInputChange, onInsert, onToggle, onRemove}) => {
  
  const handleSubmit = e => {
    e.preventDefault()
    onInsert(todoText)
    onInputChange("")
    console.log("good")
  }

  const handleChange = e => onInputChange(e.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map(todo => 
            <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove}/>
          )}
      </div>
    </div>
  );
};

export default Todos;