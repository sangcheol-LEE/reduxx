import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../components/Todos';

const TodosContainer = ({ inputChange, insert, toggle, remove}) => {
 const result = useSelector(state => state.todosReducer);
 const {todoText, todos} = result

  return (
    <Todos todoText={todoText} todos={todos}/>
  );
};

export default TodosContainer