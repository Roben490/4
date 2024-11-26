import React, { useContext } from 'react'
import { playerContext } from '../../context/playerContext'

export default function Profile() {
    const { player } = useContext(playerContext) ?? {}

  return (
    <div style={{borderRadius:'50'}}>
        <img src="" alt="" />
        <p>{player?.username}</p>
    </div>
  )
}
