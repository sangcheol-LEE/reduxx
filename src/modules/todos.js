const INPUT_CHANGE = 'todos/INPUT_CHANGE';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const inputChange = todoText => (
  {
    type: INPUT_CHANGE,
    todoText : todoText
  }
)
let id = 3
export const insert = text => (
  {
    type : INSERT,
    todo : {
      id : id++,
      text : text,
      done : false
    }
  }
)
export const toggle = id => (
  {
    type : TOGGLE,
    id : id
  }
)
export const remove = id => (
  {
    type : REMOVE,
    id : id
  }
)

const initialState = {
  todoText : "",
  todos : [
    {
      id : 1,
      text : "나는 좋은 개발자가 되고 있다.",
      done : false
    },
    {
      id : 2,
      text : "나는 좋은 개발자가 되고 있다. 두려워말자.",
      done : false
    }
  ]
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case INPUT_CHANGE :
      return {
        ...state,
        todoText : action.todoText
      }
    case INSERT :
      return {
        ...state,
        todos : state.todos.concat(action.todo)
      }
    case TOGGLE :
      return {
        ...state,
        todos : state.todos.map(todo => todo.id === action.id ? {...todo, done: !state.todo} : todo)
      }
    case REMOVE :
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default :
      return state
  }
}

export default todosReducer