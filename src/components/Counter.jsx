import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue || 1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className={`flex h-10 w-full`}>
      <button
        className="bg-teal min-w-10 flex h-full items-center justify-center text-white text-[48px]"
        onClick={decrement}
      >
        <span>-</span>
      </button>
      <div className="bg-[#D9D9D9] h-full flex justify-center items-center text-black text-2xl w-full">
        {count}
      </div>
      <button
        className="bg-teal min-w-10 flex h-full items-center justify-center text-white text-[48px]"
        onClick={increment}
      >
        <span>+</span>
      </button>
    </div>
  );
};
