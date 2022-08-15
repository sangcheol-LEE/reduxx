import React from 'react';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { connect } from 'react-redux';

const TodosContainer = ({input, todos, changeInput, insert, toggle, remove}) => {
  return (
    <Todos 
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
    state => ({
      input : state.todoReducer.input,
      todos : state.todoReducer.todos
    }),
    dispatch => ({
      changeInput: input => dispatch(changeInput(input)),
      insert : text => dispatch(insert(text)),
      toggle: id => dispatch(toggle(id)),
      remove: id => dispatch(remove(id))
    })
  
)(TodosContainer)