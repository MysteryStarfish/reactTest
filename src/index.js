import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const root = createRoot(document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2 style={{color:'red'}}>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);