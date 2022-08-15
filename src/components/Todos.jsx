import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputChange, insert } from '../modules/todos';
import TodoItem from './TodoItem';

const Todos = () => {
  const todoText = useSelector(state => state.todosReducer.todoText)
  const todos = useSelector(state => state.todosReducer.todos)
  const dispatch = useDispatch()

  const handleSubmit = e=> {
    e.preventDefault()
    dispatch(insert(todoText))
    dispatch(inputChange(""))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={e => dispatch(inputChange(e.target.value))}/>
        <button type="submit">add</button>
      </form>
      {todos.map(todo => 
          <TodoItem todo={todo} key={todo.id}/>
        )}
    </div>
  );
};

export default Todos;