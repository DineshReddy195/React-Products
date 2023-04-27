import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <div><h1>React Element</h1></div>
      <div className='menu'>
        <NavLink to='/' className='links'>Home</NavLink>
        <NavLink to='/profile' className='links'>Profile</NavLink>
        <NavLink to='/products' className='links'>Products</NavLink>
      </div>
    </div>
  )
}

export default Nav
