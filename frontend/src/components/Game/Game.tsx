import React, { useEffect, useState, useRef } from 'react';
import './game.style.css';
import HealthBar from './HealthBar/HealthBar';

const Game: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [number, setNumber] = useState(2);
  
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const changeNumber = () => {
    setNumber((prev) => prev + 0.1);
  };

  const handleMouseEnter = () => {
    if (!intervalRef.current) { 
      intervalRef.current = window.setInterval(() => {
        setNumber((prev) => prev + 0.1);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <div
        className="follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {number.toFixed(1)}
      </div>
      <button
        onClick={changeNumber}
        className="change-button-a"
      >
        Change Number
      </button>
      <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        className="change-button-b"
      >
        Increase Cube
      </button>
      <HealthBar />
    </>
  );
};

export default Game;
