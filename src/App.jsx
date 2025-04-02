import React, { useState } from 'react';
import './App.css';
import Overlay from './components/Overlay';
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  const [showOverlay, setShowOverlay] = useState(true); // Initialize to true to show overlay

  const handleOverlayClick = () => {
    setShowOverlay(false); // Hide overlay when button is clicked
  };

  return (
    <div>
      {showOverlay && <Overlay onClick={handleOverlayClick} />}
      <Navbar/>
      <Home/>
      
    </div>
  )
}

export default App