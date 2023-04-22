import React from 'react';
import './HideawayCoffee.css';

interface HideawayCoffeeProps {
  onContactUsClick: () => void;
}

const HideawayCoffee: React.FC<HideawayCoffeeProps> = ({ onContactUsClick }) => {
  return (
    <div className="hideaway-coffee">
      <h1>Hideaway Coffee</h1>
      <h2>Cafe in London</h2>
      <button onClick={onContactUsClick}>Contact Us</button>
    </div>
  );
};

export default HideawayCoffee;