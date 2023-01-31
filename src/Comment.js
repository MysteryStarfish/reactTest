import { useState } from "react";

export default function Comments() {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState(0);
  const click = () => {
    const temp = [...items];
    temp.push(newItems);
    setItems(temp);
  };
  const clearClick = () => {
    const temp = [...items];
    temp.pop();
    setItems(temp);
  };
  const change = (e) => {
    setNewItems(e.target.value);
  };

  return (
    <>
      <h1>留言</h1>
      <input onChange={change}></input>
      <button onClick={click}>add</button>
      <button onClick={clearClick}>clear</button>
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </>
  );
}
