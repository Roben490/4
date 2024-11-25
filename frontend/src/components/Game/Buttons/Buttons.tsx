import { useContext, useRef } from 'react'
import { CubeValueContext } from '../../../context/cubeValueProvider';
import HealthBar from '../HealthBar/HealthBar';

export default function Buttons() {
    const {  setValue } = useContext(CubeValueContext) ?? {
        value: 0,
        setValue: (): void => {}
      };
    const intervalRef = useRef<number | null>(null);

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
    <div>
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
      <HealthBar />
    </div>
  )
}
