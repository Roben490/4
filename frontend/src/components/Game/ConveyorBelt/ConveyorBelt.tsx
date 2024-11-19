import React, { useState, useEffect, useContext } from 'react';
import '../game.style.css';
import { CubeValueContext } from '../../../context/cubeValue';

const ConveyorBelt: React.FC = () => {
  const [cube, setCube] = useState({ left: 0, value: 2 });
  const [isHovered, setIsHovered] = useState(false);
  const { value, setValue } = useContext(CubeValueContext) ?? {
    value: 0,
    setValue: (): void => {}
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCube((prevCube) => {
        if (prevCube.left >= 500) {
          return { left: 0, value: 2 }; // קוביה חזרה להתחלה
        }
        return { ...prevCube, left: prevCube.left + 1 }; // תזוזה לקדימה
      });
    }, 50);
    return () => clearInterval(interval); // לנקות את ה-interval כשחיים משתנים
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setValue(value + cube.value)
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
