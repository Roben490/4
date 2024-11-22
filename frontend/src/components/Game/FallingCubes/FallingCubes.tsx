import React, { useState, useEffect, useContext } from 'react';
import './fallingCubes.style.css';
import { getRandomNumberFromArray } from '../../../utils/getRandomNumber';
import { CubeValueContext } from '../../../context/cubeValueProvider';

interface fallingCubeInterface {
    top: number; 
    left: number; 
    value: number
}

const FallingCubes: React.FC = () => {
  const [cubes, setCubes] = useState<fallingCubeInterface[]>([]);

  const { value, setValue } = useContext(CubeValueContext) ?? {
    value: 0,
    setValue: (): void => {},
  };

  useEffect(() => {
    const generateCube = () => {
      const newCube = {
        top: 0,
        left: Math.random() * (window.innerWidth - 50), // קוביה תמיד תתחיל בתוך המסך
        value: getRandomNumberFromArray([1, 2, 3, 4, 5, 55, 67]),
      };
      setCubes((prev) => [...prev, newCube]);
    };

    setInterval(generateCube, 2000); // כל 2 שניות קוביה חדשה
  }, []);

  useEffect(() => {
    const moveCubes = () => {
      setCubes((prev) =>
        prev
          .map((cube) => ({ ...cube, top: cube.top + 5 })) // תנועה למטה
          .filter((cube) => cube.top < window.innerHeight) // קוביות שיצאו מהמסך מוסרות
      );
    };

    const interval = setInterval(moveCubes, 50); // תנועה חלקה
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-cubes-container">
      {cubes.map((cube, index) => (
        <div
          key={index}
          className="falling-cube"
          style={{ top: `${cube.top}px`, left: `${cube.left}px` }}
        >
          {cube.value}
        </div>
      ))}
    </div>
  );
};

export default FallingCubes;
