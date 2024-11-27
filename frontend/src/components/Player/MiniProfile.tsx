import { useContext, useEffect, useState } from 'react'
import { playerContext } from '../../context/playerContext'
import { useNavigate } from 'react-router-dom'

export default function MiniProfile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const { player } = useContext(playerContext) ?? {}
    const navigate = useNavigate()

    useEffect(() => {
      window.addEventListener('resize', () => setIsMobile(window.innerWidth < 640));
      return () => window.removeEventListener('resize', () => setIsMobile(window.innerWidth < 640));
    }, [])

  return (
    <>
    <div>
    {isMobile ?
     <div style={{borderRadius:'20px', background: 'black'}}>
        <p onClick={() => navigate('/profile')}>{player?.username}</p>
        <p>{player?.email}</p>
    </div> 
    : 
    <div style={{borderRadius:'20px', background: 'black', display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center'}} >
        <img onClick={() => navigate('/profile')} src={player?.img} alt="playerImg" style={{cursor: 'pointer', maxHeight: '100px', maxWidth: '100px'}} />
        <p>{player?.username}</p>
        <p>{player?.email}</p>
        <p>{player?.score}</p>
        <p>{player?.lives}</p>
    </div>
    }
    </div>

    </>
  )
}
