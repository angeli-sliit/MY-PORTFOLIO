import React from 'react';
import './NeonButton.css';

const NeonButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  className = '', 
  ariaLabel,
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`neon-button ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
