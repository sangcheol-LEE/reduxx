// 액션 객체 만들기

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/헤크해제를 해준다.
const REMOVE = 'todos/REMOVE'; // todo를 지운다.


// 액체 생성 함수 

const changeInput = (input) => (
  {
    type : CHANGE_INPUT,
    input : input
  })

let id = 3;
const insert = (text) => (
  {
    type : INSERT,
    todo : {
      id: id++,
      text,
      done : false
    }
  });

const toggle = (id) => (
  {
    type : TOGGLE,
    id : id
  })

const remove = (id) => (
  {
    type : REMOVE,
    id : id
  }
)

// 초기 상태
const initialState = {
  input : "",
  todos : [
    {
      id: 1,
      text: "make redux react",
      done : false
    },
    {
      id: 2,
      text: "make redux todoList",
      done : false
    },
  ]
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
      case CHANGE_INPUT :
        return {
          input : action.input
        }
      case INSERT :
        return {
          ...state,
         todos: state.todos.concat(action.todo)
        }
      case TOGGLE : 
        return {
          ...state,
          todos : state.todos.map(todo => 
            todo.id === action.id ? { ...todo, done : !todo.done } : todo
          )
        };
      case REMOVE :
        return {
          ...state,
          todos : state.todos.filter(todo => todo.id !== action.id)
        }
      default :
        return state
    }
}

export default todoReducer;