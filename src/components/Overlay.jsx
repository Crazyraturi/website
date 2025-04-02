import React from 'react';
import { useNavigate } from 'react-router'; // Use useNavigate instead of useHistory
import frameImage from '../assets/frame.png'; // Adjust the path as necessary

const Overlay = ({ onClick }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    onClick(); // Call the onClick prop to hide the overlay
    navigate('/home'); // Redirect to the home screen
  };

  return (
    <div className="overlay">
      <img src={frameImage} alt="Frame" className="frame-image" />
      <button className="dive-in-button" onClick={handleClick}>
        Dive In
      </button>
    </div>
  );
};

export default Overlay; 