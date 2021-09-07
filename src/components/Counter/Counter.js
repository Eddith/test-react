import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [secret, setSecret] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        Decrement
      </button>
      <br></br>
      <br></br>
      <label htmlFor="input">Secret</label> <br></br>
      <input
        id="input"
        type="text"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

export default Counter;
