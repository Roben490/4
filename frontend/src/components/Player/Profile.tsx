import React, { useContext, useEffect, useState } from 'react'
import { playerContext } from '../../context/playerContext'

export default function Profile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const { player } = useContext(playerContext) ?? {}

    useEffect(() => {
      window.addEventListener('resize', () => setIsMobile(window.innerWidth < 640));
      return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth < 640));
    }, [])

  return (
    <>
    {isMobile ?
     <div style={{borderRadius:'20px', background: 'black'}}>
        <p>{player?.username}</p>
        <p>{player?.email}</p>
    </div> 
    : 
    <div style={{borderRadius:'20px', background: 'black'}}>
        <p>{player?.username}</p>
        <p>{player?.email}</p>
        <p>{player?.score}</p>
        <p>{player?.lives}</p>
    </div>
    }
    
    </>
  )
}
