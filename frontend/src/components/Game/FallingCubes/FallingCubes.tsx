import React, { useState, useEffect, useContext } from 'react';
import './fallingCubes.style.css';
import { getRandomNumberFromArray } from '../../../utils/getRandomNumber';
import { CubeValueContext } from '../../../context/cubeValueProvider';
import { v4 } from 'uuid'

interface fallingCubeInterface {
    id: string;
    top: number; 
    left: number; 
    value: number;
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
        id: v4(),
        top: 0,
        left: Math.random() * (window.innerWidth - 50), // קוביה תמיד תתחיל בתוך המסך
        value: getRandomNumberFromArray([1, 2, 3, 4, 5]),
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

  const handleMouseEnter = (cubeId: string) => {
    const currentCube = cubes.find((c) => c.id === cubeId)
    const currentCubeIndex = cubes.findIndex((c) => c.id === cubeId)
    cubes.splice(currentCubeIndex,1)
    if (currentCube) {
      setValue(value - currentCube.value);
    }
  };

  return (
    <div className="falling-cubes-container">
      {cubes.map((cube, index) => (
        <div
          key={index}
          className="falling-cube"
          style={{ top: `${cube.top}px`, left: `${cube.left}px` }}
          onMouseEnter={() => handleMouseEnter(cube.id)}
        >
          {cube.value}
        </div>
      ))}
    </div>
  );
};

export default FallingCubes;
