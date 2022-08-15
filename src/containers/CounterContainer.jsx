import React from 'react';
import {increase, decrease} from "../modules/counter";
import Counter from '../components/Counter';
import { connect } from 'react-redux';

const CounterContainer = ({number, increase, decrease}) => {
  return (
    <Counter 
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

export default connect(
  state => ({
    number : state.counterReducer.number
  }),
  dispatch => ({
    increase : () => dispatch(increase()),
    decrease : () => dispatch(decrease()),
  })
)(CounterContainer);