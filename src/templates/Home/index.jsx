import { useCounterContext } from '../../contexts/CounterContext';

export const App = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div className="App">
      <h1>Lá ele</h1>
    </div>
  );
};
