import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector( state => state.counter );
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: `INC` })
  };
  const decrement = () => {
    dispatch({ type: `DEC` })
  };
  const addBy = () => {
    dispatch({ type: `ADD`, payload: 10 })
  }

  return (
    <div>
      <h2>Counter</h2>
      <h1>{counter}</h1>
      <div id="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={addBy}>Add By 10</button>
      </div>
    </div>
  );
}

export default App;
