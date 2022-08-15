import React from 'react';
import Counter from './components/Counter';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <Counter number={0}/>
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;