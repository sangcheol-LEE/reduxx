import React from 'react';
import { useDispatch } from 'react-redux';
import {increase, decrease} from "../modules/counter"

const Counter = ({number}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increase())}>+ 1</button>
        <button onClick={() => dispatch(decrease())}>- 1</button>
      </div>
    </div>
  );
};

export default Counter;