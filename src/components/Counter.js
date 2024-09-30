import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";
function Counter() {
  const state = useSelector((state) => state.Counter.value);
  console.log(state);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white gap-4">
      <h1 className="text-6xl pb-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-600 to-pink-800 shiny-glass animate-pulse">
        Counter App
      </h1>
      <p className="text-white text-2xl">{state}</p>
      <div className="flex flex-row gap-4 w-full max-w-xs">
        <button
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-500 cursor-pointer p-2 rounded text-white w-1/3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-500 cursor-pointer p-2 rounded text-white w-1/3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-500 cursor-pointer p-2 rounded text-white w-1/3"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
