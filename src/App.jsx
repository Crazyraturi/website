import React, { useState } from "react";
import "./App.css";
import Overlay from "./components/Overlay";
import Home from "./components/Home";

function App() {
  const [showHome, setShowHome] = useState(false);

  console.log(showHome);
  return (
    <>
      <Overlay setShowHome={setShowHome} />
      {showHome && <Home />}
    </>
  );
}

export default App;
