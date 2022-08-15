// action Obj
const INPUT_CHANGE = 'todos/INPUT_CHANGE';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';


// make action function
export const inputChange = todoText => (
    {
      type : INPUT_CHANGE,
      todoText: todoText
    }
  )

let id = 3;
export const insert = text => (
  {
    type : INSERT,
    todo : {
      id: id++,
      text : text,
      done : false
    }
  }
)

export const toggle = id => (
  {
    type: TOGGLE,
    id : id
  }
)

export const remove = id => (
  {
    type : REMOVE,
    id : id
  }
)

// initialState

const initialState = {
  todoText : "",
  todos : [
    {
      id : 1,
      text : "나는 동료들이 필요로 하는 개발자가 된다.",
      done : true
    },
    {
      id: 2,
      text : "나 이상철은 백만장자 마인드를 가졌고, 나는 부자가 될 것이다.",
      done : false
    }
  ]
}


// Reducer 
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
        todos: state.todos.map(todo => todo.id === action.id ? {...todo, done : !todo.done}: todo)
      }
    case REMOVE :
      return {
        ...state,
        todos : state.todos.filter(todo => todo.id !== action.id)
      }
    default : 
      return state
  }
}

export default todosReducer