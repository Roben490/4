import React, { useState, useEffect } from 'react';
import '../game.style.css';

const ConveyorBelt: React.FC = () => {
  const [cube, setCube] = useState({ left: 0, value: 2 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCube((prevCube) => {
        if (prevCube.left >= 500) {
          return { left: 0, value: 2 }; // קוביה חזרה להתחלה
        }
        return { ...prevCube, left: prevCube.left + 1 }; // תזוזה לקדימה
      });
    }, 10);

    return () => clearInterval(interval); // לנקות את ה-interval כשחיים משתנים
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCube({ left: 0, value: 0 }); // הקוביה נעלמת אם אנחנו מעליה
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="conveyor-belt">
      {!isHovered && (
        <div
          className="cube"
          style={{
            left: `${cube.left}px`,
            width: '80px',
            height: '80px',
            backgroundColor: 'blue',
            position: 'absolute',
            top: '10px',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cube.value}
        </div>
      )}
    </div>
  );
};

export default ConveyorBelt;
