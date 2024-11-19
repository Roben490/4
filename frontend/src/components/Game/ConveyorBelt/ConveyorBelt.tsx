import React, { useState, useEffect, useContext } from 'react';
import '../game.style.css';
import { CubeValueContext } from '../../../context/cubeValueProvider';
import { getRandomNumberFromArray } from '../../../utils/getRandomNumber';

const ConveyorBelt: React.FC = () => {
  const [cubePosition, setCubePosition] = useState(16);
  const [isVisible, setIsVisible] = useState(true);
  const [cubeBeltValue, setCubeBeltValue] = useState<number>(0);

  const { value, setValue } = useContext(CubeValueContext) ?? {
    value: 0,
    setValue: (): void => {},
  };

  useEffect(() => {
    if (!isVisible) return;
    setInterval(() => {
      setCubePosition((prev) => (prev < 500 ? prev += 1 : 0));
    }, 10);
  }, [isVisible]);

  const handleMouseEnter = () => {
    setValue(value + cubeBeltValue);
    setIsVisible(false);
    setTimeout(() => {
      setCubePosition(0);
      setCubeBeltValue(getRandomNumberFromArray([2,4,6,8,10,12]));
      setIsVisible(true);
    }, 1000);
  };

  return (
    <div className="conveyor-belt">
      {isVisible && (
        <div
          className="cube"
          style={{ left: `${cubePosition}px` }}
          onMouseEnter={handleMouseEnter}
        >
          {cubeBeltValue}
        </div>
      )}
    </div>
  );
};

export default ConveyorBelt;
