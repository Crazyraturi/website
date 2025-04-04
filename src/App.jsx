import React, { useState } from "react";
import "./App.css";

// components
import Overlay from "./components/Overlay";
import Home from "./components/Home";

function App() {
  const [isRendered, setIsRendered] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const handleRenderComplete = () => {
    setTimeout(() => {
      setHideOverlay(true);
    }, 0.5 * 1000); // 0.5 seconds
  };

  return (
    <div className="App w-screen h-screen relative overflow-hidden">
      {!hideOverlay && <Overlay setIsRendered={setIsRendered} />}
      <Home isRendered={isRendered} onRenderComplete={handleRenderComplete} />
    </div>
  );
}

export default App;
