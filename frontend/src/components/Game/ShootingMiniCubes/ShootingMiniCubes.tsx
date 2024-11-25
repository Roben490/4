import { useContext, useState } from 'react'
import { CubeValueContext } from '../../../context/cubeValueProvider'
import { CubePositionContext } from '../../../context/cubePositionProvider';

export default function ShootingMiniCubes() {
    
    const { value } = useContext(CubeValueContext) ?? {
        value: 0,
      };
    const { x, y } = useContext(CubePositionContext) ?? {
        x: 0,
        y: 0,
      };
    const [position, setPosition] = useState({top: y, left: x})
    
  return (
    <div style={{background: 'red', height: '30px', width: '30px', position: 'absolute', top: `${position.top}`, left: `${position.left}` }}>{value.toFixed(1)}</div>
  )
}
