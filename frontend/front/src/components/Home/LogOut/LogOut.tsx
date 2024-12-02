import React, { useContext } from 'react'
import { userContext } from '../../../context/userContext'

export default function LogOut() {
    const { user, setUser} = useContext(userContext) ?? {
        user: {}, 
        setUser: (): void => {}
    }
  return (
    <div>
        {user ? <button onClick={() => setUser(null)}>Log Out</button> : <></> }
    </div>
  )
}
