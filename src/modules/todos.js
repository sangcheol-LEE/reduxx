// 액션 객체 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = "todos/REMOVE";

// 액션 생성 함수

export const changeInput = input => (
  {
    type : CHANGE_INPUT,
    input: input
  }
)
let id = 3;
export const insert = text => (
    {
      type: INSERT,
      todo : {
        id: id++,
        text: text,
        done: false
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
    type: REMOVE,
    id : id
  }
)

// 초기상태정의

const initialState = {
  input : "",
  todos : [
    {
      id: 1,
      text: "리덕스 기초",
      done: false
    },
    {
      id: 2,
      text: "결국은 계속 반복 숙달",
      done: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INPUT : 
      return {
        ...state,
        input: action.input
      }
    case INSERT :
        return {
          ...state,
          todos : state.todos.concat(action.todo)
        }
    case TOGGLE : 
        return {
          ...state,
          todos : state.todos.map(todo => todo.id === action.id ? {...todo, done : !todo.done} : todo )
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

export default todoReducer