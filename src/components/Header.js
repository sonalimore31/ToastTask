import React from "react"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className='nav'>
      <div className='nav-header'>
        <Link className='nav-title' to='/'>
          Header
        </Link>
      </div>

      <div className='nav-links'>
        <Link to='/Component1'>Component1</Link>
        <Link to='/Component2'>Component2</Link>
      </div>
    </div>
  )
}

export default Header
