import { useEffect, useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

export const App = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div className="App">
      <h1 onClick={() => actions.increase()}>Lá ele</h1>
    </div>
  );
};
