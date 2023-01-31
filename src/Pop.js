import { useState } from "react";

export default function Pop() {
  const [color, setColor] = useState("black");
  const [conut, setCount] = useState(0);

  const plusClick = () => {
    setCount(conut + 1);
    if (conut > 3) {
      setColor("red");
    }
  };
  const minusClick = () => {
    setCount(conut - 1);
  };

  return (
    <>
      <h1>pop</h1>
      <button onClick={plusClick}>+</button>
      <button onClick={minusClick}>-</button>
      <p style={{ color }}>{conut}</p>
    </>
  );
}
