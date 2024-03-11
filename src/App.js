import React, { useState } from "react";
import "../src/styles/style.css";
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [res, setRes] = useState(0);

  function decrementx() {
    setX(x - 1);
  }

  function incrementx() {
    setX(x + 1);
  }

  function decrementy() {
    setY(y - 1);
  }

  function incrementy() {
    setY(y + 1);
  }
  function addition() {
    setRes(x + y);
  }
  function subtraction() {
    setRes(x - y);
  }
  function multiplication() {
    setRes(x * y);
  }
  function division() {
    setRes(x / y);
  }

  return (
    <div className="calculator">
      <h1>REACT CALCULATOR</h1>
      <br></br>
      <h4>Num 1</h4>
      <button onClick={decrementx}>-</button>
      <input type="text" readOnly value={x}></input>
      <button onClick={incrementx}>+</button>
      <br></br>
      <br></br>
      <h4>Num2</h4>
      <button onClick={decrementy}>-</button>
      <input type="text" readOnly value={y}></input>
      <button onClick={incrementy}>+</button>
      <br></br>
      <br></br>
      <button onClick={addition}>ADD</button>
      <br></br>
      <br></br>
      <button onClick={subtraction}>SUBTRACT</button>
      <br></br>
      <br></br>
      <button onClick={multiplication}>MULTIPLY</button>
      <br></br>
      <br></br>
      <button onClick={division}>DIVIDE</button>
      <br></br>
      <br></br>
      <h4>RESULT</h4>
      <input type="text" readOnly value={res}></input>
    </div>
  );
}

export default App;
