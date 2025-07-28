import { useState } from "react";
import "./App.css";
import { PopupWindow } from "./components/Pop-up.jsx";

function App() {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      {/* initialize PopupWindow */}
      <PopupWindow trigger={trigger} setTrigger={setTrigger} />
      <button
        className="create-window"
        title="這是產生彈出視窗的按鈕"
        onClick={() => setTrigger(true)}
      >
        點我產出彈出視窗
      </button>
    </>
  );
}

export default App;
