import React from 'react';

const Todos = ({input, todos,onChangeInput, onRemove, onToggle, onInsert}) => {
  const handleSubmit = e => {
    e.preventDefault()
    onInsert(input)
    onChangeInput("")
  }

  const handleChange = (e) => onChangeInput(e.target.value)
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleChange}/>
          <button type="submit" >add</button>
      </form>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};



const TodoItem = ({todo, onToggle, onRemove}) => {
  return (
    <div>
      <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true}/>
      <span style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.text}</span>
      <button onClick={()=> onRemove(todo.id)}>remove</button>
    </div>
  )
}

export default Todos;