import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function MiniProfile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const { User } = useContext(UserContext) ?? {}
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
        <img onClick={() => navigate('/profile')} src={User?.img} alt="UserImg" style={{cursor: 'pointer', maxHeight: '100px', maxWidth: '100px'}} />
        <p>{User?.username}</p>
        <p>{User?.email}</p>
    </div> 
    : 
    <div style={{borderRadius:'20px', background: 'black', display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center'}} >
        <img onClick={() => navigate('/profile')} src={User?.img} alt="UserImg" style={{cursor: 'pointer', maxHeight: '100px', maxWidth: '100px'}} />
        <p>{User?.username}</p>
        <p>{User?.email}</p>
        <p>{User?.score}</p>
        <p>{User?.lives}</p>
    </div>
    }
    <button onClick={() => navigate('/profileDetails')}>Open Details Page</button>
    </div>

    </>
  )
}
