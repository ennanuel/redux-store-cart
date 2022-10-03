import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

const Sample = () => {
  const counter = useSelector( state => state.counter );
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment())
  };
  const decrement = () => {
    dispatch(actions.decrement())
  };
  const addBy = () => {
    dispatch(actions.addBy(10))
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