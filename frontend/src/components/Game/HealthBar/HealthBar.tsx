import React, { useState } from "react";
import "./HealthBar.style.css";

const HealthBar: React.FC = () => {
  const [health, setHealth] = useState(100);

  const decreaseHealth = () => {
    setHealth((prev) => Math.max(0, prev - 10));
  };

  const increaseHealth = () => {
    setHealth((prev) => Math.min(100, prev + 10));
  };

  return (
    <div className="health-bar-container">
      <div
        className="health-bar"
        style={{ width: `${health}%` }}
      ></div>
      <div className="controls">
        <button onClick={decreaseHealth} className="control-button">
          Decrease Health
        </button>
        <button onClick={increaseHealth} className="control-button">
          Increase Health
        </button>
      </div>
    </div>
  );
};

export default HealthBar;
