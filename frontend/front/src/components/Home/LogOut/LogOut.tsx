import React, { useContext } from 'react'
import { userContext } from '../../../context/userContext'
import '../Home.style.css'

export default function LogOut() {
    const { user, setUser} = useContext(userContext) ?? {
        user: {}, 
        setUser: (): void => {}
    }
  return (
    <div className='logout'>
        {user ? <button onClick={() => setUser(null)}>Log Out</button> : <></> }
    </div>
  )
}
