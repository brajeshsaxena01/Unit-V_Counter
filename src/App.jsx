import { useState } from "react";

import "./styles.css";
import { Category } from "./components/Category";

export default function App() {
  const [counter, setCounter] = useState(0);
  // const handleChange=(value)=>{
  //   setCounter(counter+value)
  // }
  // if(counter>=10){
  //   return <h1>Counter reach maximum value</h1>
  // }

  return (
    <div className="App">
      <h3>Counter:{counter} </h3>
      {/* <button onClick={()=>handleChange(1)}>Add 1</button>
      
      <button onClick={()=>handleChange(-1)}>Sub 1</button> */}
      {/* or you can write like this--> */}
      <button
        onClick={() => {
          if (counter >= 10) {
            return;
          }
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          if (counter <= 0) {
            return;
          }
          setCounter(counter - 1);
        }}
      >
        Sub 1
      </button>

      <div>Number is {counter % 2 === 0 ? "Even" : "Odd"}</div>
    </div>
  );
}
