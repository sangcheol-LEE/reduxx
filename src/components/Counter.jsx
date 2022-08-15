import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';
const Counter = () => {
  const dispatch = useDispatch()
  const number = useSelector(state => state.counterReducer.number)
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={()=> dispatch(increase())}> + 1</button>
        <button onClick={()=> dispatch(decrease())}> - 1</button>
      </div>
    </div>
  );
};

export default Counter;