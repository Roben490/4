import React, { useEffect, useRef, useContext } from 'react';
import './game.style.css';
import HealthBar from './HealthBar/HealthBar';
import ConveyorBelt from './ConveyorBelt/ConveyorBelt';
import { CubeValueContext } from '../../context/cubeValueProvider';
import FallingCubes from './FallingCubes/FallingCubes';
import { CubePositionContext } from '../../context/cubePositionProvider';

const Game: React.FC = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  const { x, y, setPositionX, setPositionY } = useContext(CubePositionContext) ?? {
    x: 0,
    y: 0,
    setPositionX: (): void => {},
    setPositionY: (): void => {}
  }

  const { value, setValue } = useContext(CubeValueContext) ?? {
    value: 0,
    setValue: (): void => {}
  };
  
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPositionX(event.clientX);
      setPositionY(event.clientY)
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const changeCubeValue = () => {
    setValue((prev) => prev! + 0.1);
  };

  const handleMouseEnter = () => {
    if (!intervalRef.current) { 
      intervalRef.current = window.setInterval(() => {
        setValue((prev) => prev! + 0.1);
      }, 1000);
    }};

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }};

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
      <button
        onClick={changeCubeValue}
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
      <FallingCubes/>
      <ConveyorBelt />
      <HealthBar />
    </>
  );
};

export default Game;
