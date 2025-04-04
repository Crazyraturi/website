import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import Overlay from './components/Overlay';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isRendered, setIsRendered] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const handleRenderComplete = () => {
    setTimeout(() => {
        setHideOverlay(true);
      }, 0.5 * 1000); // 0.5 seconds
    };
  return (
    <Routes>
      <Route path="/" element={<Overlay />} />
      <Route path="/home" element={
        <>
          <Navbar />
          <div className="App w-screen h-screen relative overflow-hidden">
            {!hideOverlay && <Overlay setIsRendered={setIsRendered} />}
            <Home isRendered={isRendered} onRenderComplete={handleRenderComplete} />
          </div>
        </>
      } />
      {/* Additional routes */}
    </Routes>
  );
}

export default App;