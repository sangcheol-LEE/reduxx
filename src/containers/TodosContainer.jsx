import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { inputChange, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({todoText, todos, inputChange, insert, toggle, remove}) => {
  return (
    <Todos
      todoText={todoText}
      todos={todos}
      onInputChange={inputChange}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  state => ({
    todoText: state.todosReducer.todoText,
    todos : state.todosReducer.todos
  }),
 {
    inputChange,
    insert,
    toggle,
    remove
  },
)(TodosContainer);