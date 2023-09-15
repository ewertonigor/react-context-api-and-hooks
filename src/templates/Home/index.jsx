import { useEffect, useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const App = () => {
  const [state, actions] = useCounterContext();

  return (
    <div className="App">
      <Heading />

      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
      </div>
    </div>
  );
};
