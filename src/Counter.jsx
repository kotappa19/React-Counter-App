import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(c => c + 1);
  };

  const decrementCount = () => {
    setCount(c => c - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
      <div className="mx-auto max-w-sm h-48 bg-sky-50 shadow-md rounded-md m-5 p-5">
        <h1 className="text-3xl font-bold text-center mb-4">Counter App</h1>
        <h2 className="text-5xl text-center mb-4 font-semibold">{count}</h2>
        <button className="max-w-sm p-2 m-2 h-10 bg-sky-500 rounded-md hover:bg-sky-600 text-white" onClick={incrementCount}>Increment</button>
        <button className="max-w-sm p-2 m-2 h-10 bg-sky-500 rounded-md hover:bg-sky-600 text-white" onClick={resetCount}>Reset</button>
        <button className="max-w-sm p-2 m-2 h-10 bg-sky-500 rounded-md hover:bg-sky-600 text-white" onClick={decrementCount}>Decrement</button>
      </div>
  );
}

export default Counter;
