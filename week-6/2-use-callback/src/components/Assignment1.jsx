import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    console.log("Increment");
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((prevCount) => {
      prevCount = prevCount - 1;
      return prevCount;
    });
    console.log("decrement");
  }, []);

  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button style={{ margin: 20 }} onClick={onIncrement}>
      Increment
    </button>
    <br></br>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
