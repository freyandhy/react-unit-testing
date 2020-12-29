import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleMinus = () => (counter === 0 ? false : setCounter(counter - 1));

  return (
    <div>
      <h1>This is counter app</h1>
      <div className="counter-value">{counter}</div>
      <button id="btn-plus" onClick={() => setCounter(counter + 1)}>
        Plus
      </button>
      <button id="btn-minus" onClick={handleMinus}>
        Minus
      </button>
    </div>
  );
};

export default Counter;
