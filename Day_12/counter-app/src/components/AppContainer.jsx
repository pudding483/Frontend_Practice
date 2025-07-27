import { useState } from "react";
import "./AppContainer.css";

function AppContainer() {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  const subtractCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="appContainer">
      <h2>Counter App</h2>

      <p className="counterNumber">{count}</p>

      <div className="buttonContainer">
        <button className="addButton" onClick={addCount}>
          +
        </button>
        <button className="subtractButton" onClick={subtractCount}>
          –
        </button>
        <button className="resetButton" onClick={resetCount}>
          ⟳
        </button>
      </div>
    </div>
  );
}

export { AppContainer };
