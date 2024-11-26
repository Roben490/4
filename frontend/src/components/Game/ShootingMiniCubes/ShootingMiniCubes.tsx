// import React, { useState, useEffect, useContext } from 'react';

// import { getRandomNumberFromArray } from '../../../utils/getRandomNumber';
// import { CubeValueContext } from '../../../context/cubeValueProvider';
// import { v4 } from 'uuid'
// import { CubePositionContext } from '../../../context/cubePositionProvider';

// interface ShootingCubeInterface {
//     id: string;
//     top: number; 
//     left: number; 
//     value: number;
// }

// const ShootingMiniCubes: React.FC = () => {
//   const [cubes, setCubes] = useState<ShootingCubeInterface[]>([]);

//   const { value, setValue } = useContext(CubeValueContext) ?? {
//     value: 0,
//     setValue: (): void => {},
//   }; 
//   console.log(value);
   

//   const { x, y, setPositionX, setPositionY} = useContext(CubePositionContext) ?? {
//     x: 0,
//     y: 0,
//     setPositionX: (): void => {},
//     setPositionY: (): void => {}
//   }

//   const generateCube = async () => {
//     const newCube = {
//       id: await v4(),
//       top: 0,
//       left: Math.random() * (window.innerWidth - 50),
//       value: await value,
//     };
//     console.log(newCube);
//     setCubes((prev) => [...prev, newCube]);
//   };
  
//   useEffect(() => {
//       setInterval(() => generateCube(value), 2000); 
//   }, [value]);


//   useEffect(() => {
//     const moveCubes = () => {
//       setCubes((prev) =>
//         prev
//           .map((cube) => ({ ...cube, top: cube.top + 5 })) // תנועה למטה
//           .filter((cube) => cube.top < window.innerHeight) // קוביות שיצאו מהמסך מוסרות
//       );
//     };
//     const interval = setInterval(moveCubes, 50); // תנועה חלקה
//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseEnter = (cubeId: string) => {
//     const currentCube = cubes.find((c) => c.id === cubeId)
//     const currentCubeIndex = cubes.findIndex((c) => c.id === cubeId)
//     cubes.splice(currentCubeIndex,1)
//     if (currentCube) {
//       setValue(value - currentCube.value);
//     }
//   };

//   return (
//     <div className="falling-cubes-container">
//       {cubes.map((cube, index) => (
//         <div
//           key={index}
//           className="falling-cube"
//           style={{ top: `${cube.top}px`, left: `${cube.left}px` }}
//           onMouseEnter={() => handleMouseEnter(cube.id)}
//         >
//           {cube.value}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShootingMiniCubes;
