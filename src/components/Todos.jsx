import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { inputChange, insert } from '../modules/todos';

const Todos = ({todoText, todos}) => {
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(insert(todoText))
    dispatch(inputChange(""))
    console.log("good")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={e => dispatch(inputChange(e.target.value))}/>
        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map(todo => 
            <TodoItem todo={todo} key={todo.id}/>
          )}
      </div>
    </div>
  );
};

export default Todos;