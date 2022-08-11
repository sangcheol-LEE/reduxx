import React from 'react';


const TodosItem = ({todo, onToggle, onRemove}) => {
  return (
    <div>
      <input type="checkbox"/>
      <span>text</span>
      <button>remove</button>
    </div>
  )
}




const Todos = ({input, todos, onChangeInput, onInsert, onToggle, onRemove}) => {

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">add</button>
      </form>
      <div>
        <TodosItem />
        <TodosItem />
        <TodosItem />
      </div>
    </div>
  );
};

export default Todos;