import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <ul id='nav-mobile' className='right'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/addroom'>Add room</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
