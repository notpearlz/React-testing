import { useState } from "react";

const App = ()=>{
  const [heading, setheading] = useState("Magnificent Rhinos")

  const clickHandler = (e)=>{
    e.preventDefault();

    setheading("Radical Monkeys")
  }
  return (
    <>
      <h1>{heading}</h1>
      <button type='button' onClick={clickHandler}>Click Me </button>
    </>
  );
}


export default App;