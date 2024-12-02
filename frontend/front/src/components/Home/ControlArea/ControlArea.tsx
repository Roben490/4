import React from 'react'
import Drivers from './Drivers/Drivers'
import Buses from './Buses/Buses'
import RoutersBus from './RoutesBus/RoutersBus'
import './ControlArea.style.css'

export default function ControlArea() {
  return (
    <div className='control-area'>
        <Buses/>
        <Drivers/>
        <RoutersBus/>
    </div>
  )
}
