import './App.css';
import React, { useEffect, useState } from "react";



function Button(props) {
  // const handleClick = () => setCounter(counter*2)
  return (
  <button onClick={() => props.onClick(props.increment)}>
    +{props.increment}
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
  const incrementCounter = (incrementvalue) => setCounter(counter+incrementvalue);
  return (
    <div>
      <Button onClick={incrementCounter} increment={1}/>
      <Button onClick={incrementCounter} increment={5}/>
      <Button onClick={incrementCounter} increment={10}/>
      <Button onClick={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
