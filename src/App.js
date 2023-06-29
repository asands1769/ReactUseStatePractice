import './App.css';
import React, { useEffect, useState } from "react";



function Button(props) {
  // const handleClick = () => setCounter(counter*2)
  return (
  <button onClick={props.onClick}>
    *2
  </button>
  );
}

function Display (props) {
  return (
    <div>{props.message}</div>
  )
}
function App() {
  const [counter, setCounter] = useState(5);
  const incrementCounter = () => setCounter(counter*2);
  return (
    <div>
      <Button onClick={incrementCounter}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
