// 액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수 정의

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

let id = 3;
export const insert = text => ({
  type: INSERT,
  todo: {
    id : id++,
    text,
    done: false
  }
})

export const toggle = id => ({
  type : TOGGLE,
  id
})

export const remove = id = ({
  type: REMOVE,
  id
})

// 초기 상태
const initialState = {
  input : "",
  todos : [
    {
      id : 1,
      text: "learn Redux basic",
      done: true
    },{
      id : 2,
      text: "use Redux and react",
      done: false
    },
  ]
}

const todos = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT :
      return {
        ...state,
        input : action.input
      }
    case INSERT :
      return {
        ...state,
        todos : state.todos.concat(action.todo)
      }
    case TOGGLE :
      return {
        ...state,
        todos : state.todos.map(todo => 
          todo.id === action.id ? {...todo , done: !state.done} : todo
        )
      }
    case REMOVE :
      return {
        ...state,
        todos : state.todos.filter(todo => (todo.id !== action.id))
      }
    default :
      return state
  }
}

export default todos