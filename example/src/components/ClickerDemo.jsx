import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);

  //Using useEffect here to execute the passed function AFTER every render of this component
  useEffect(() => {
    document.title = `Counter :${count}`;
  });
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};
