import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [incrementInput, setIncrementInput] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementInput) || 0;

  const resetAll = () => {
    dispatch(reset());
    setIncrementInput(0);
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => setIncrementInput(e.target.value)}
          value={incrementInput}
        />
      </div>

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add By Amount
        </button>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
