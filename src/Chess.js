import { useState } from "react";

let playerNum = 0;

let winner = 0;

const OOXX = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const Block = (props) => {
  return (
    <>
      <button onClick={props.play}>{props.chess}</button>
    </>
  );
};

export default function Chess() {
  const player = ["O", "X"];
  const [text, setText] = useState("");
  const [broad, setBroad] = useState([
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/"
  ]);
  //const [OOXX, setOOXX] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const newBroad = [...broad];
  const play = (index) => {
    if (OOXX[index] !== 0) {
      return (
        <>
          <button>{broad[index]}</button>
        </>
      );
    }
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    newBroad[index] = player[playerNum];
    console.log(newBroad);
    OOXX[index] = playerNum === 0 ? 1 : -1;
    setBroad(newBroad);

    if (playerNum === 0) playerNum = 1;
    else if (playerNum === 1) playerNum = 0;
    for (let i = 0; i < win.length; i++) {
      let value = 0;
      win[i].map((j) => (value += OOXX[j]));
      if (value === 3) {
        winner = 1;
        //document.write("O win");
        break;
      } else if (value === -3) {
        winner = 2;
        //document.write("X win");
        break;
      }
    }
    console.log(winner);
    if (winner === 1) {
      setText("O win");
    } else if (winner === 2) {
      setText("X win");
    }
  };
  const reset = () => {
    return (
      <>
        <Block chess={broad[0]} play={play(0)} />
        <Block chess={broad[1]} play={play(1)} />
        <Block chess={broad[2]} play={play(2)} />
        <br />
        <Block chess={broad[3]} play={play(3)} />
        <Block chess={broad[4]} play={play(4)} />
        <Block chess={broad[5]} play={play(5)} />
        <br />
        <Block chess={broad[6]} play={play(6)} />
        <Block chess={broad[7]} play={play(7)} />
        <Block chess={broad[8]} play={play(8)} />
        <br />
        <br />
        <div>{text}</div>
        <button onClick={reset}>reset</button>
      </>
    );
  };

  return (
    <>
      <h1>OOXX</h1>
      <Block chess={broad[0]} play={() => play(0)} />
      <Block chess={broad[1]} play={() => play(1)} />
      <Block chess={broad[2]} play={() => play(2)} />
      <br />
      <Block chess={broad[3]} play={() => play(3)} />
      <Block chess={broad[4]} play={() => play(4)} />
      <Block chess={broad[5]} play={() => play(5)} />
      <br />
      <Block chess={broad[6]} play={() => play(6)} />
      <Block chess={broad[7]} play={() => play(7)} />
      <Block chess={broad[8]} play={() => play(8)} />
      <br />
      <br />
      <br />
      <div>{text}</div>
      <button onClick={reset}>reset</button>
    </>
  );
}
