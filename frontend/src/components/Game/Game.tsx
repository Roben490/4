import React, { useEffect, useContext } from 'react';
import './game.style.css';
import ConveyorBelt from './ConveyorBelt/ConveyorBelt';
import { CubeValueContext } from '../../context/cubeValueProvider';
import FallingCubes from './FallingCubes/FallingCubes';
import { CubePositionContext } from '../../context/cubePositionProvider';
import Buttons from './Buttons/Buttons';

const Game: React.FC = () => {
  const { x, y, setPositionX, setPositionY } = useContext(CubePositionContext) ?? {
    x: 0,
    y: 0,
    setPositionX: (): void => {},
    setPositionY: (): void => {}
  }

  const { value } = useContext(CubeValueContext) ?? {
    value: 0,
    setValue: (): void => {}
  };
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPositionX(event.clientX);
      setPositionY(event.clientY)
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="follower"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        {value.toFixed(1)}
      </div>
      <Buttons/>
      <FallingCubes/>
      <ConveyorBelt />
    </>
  );
};

export default Game;
