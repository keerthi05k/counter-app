import { useState } from "react";

function App(){
    const [count, setCount] = useState(0);

   return(
    <div className="App flex">
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button className="increase" onClick={() => setCount(count + 1)}>Increment</button>
    <button className="decrease" onClick={() => setCount(count - 1)} disabled = {count === 0}>Decrement</button>
    <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
   )
}
export default App;
