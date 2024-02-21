import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/slices/articles2'

export const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch(increment());
  };

  const reduseOne = () => {
    dispatch(decrement());
  };

  const addByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <h1>Home page</h1>
      <br />
      <br />
      <br />
      <br />
      <h1>{count}</h1>
      <div className="button-block">
        <span className="button" onClick={reduseOne}>-</span>{" "}
        <span className="button" onClick={addOne}>+</span>
      </div>
      <div className="button-block">
        <button onClick={() => addByAmount(100)}>Add A LOT</button>
      </div>
    </div> 
  );
};
