import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked {count} times`;
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseEffectHook;
