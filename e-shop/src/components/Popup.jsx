import React from 'react';
import '../App.css'

const Popup = ({ message, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-container">
      {message}
    </div>
  );
};

export default Popup;