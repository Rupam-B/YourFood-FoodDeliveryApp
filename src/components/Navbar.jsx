import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='nav-bar'>
        <ul>
          <li >
            <Link to="/"  >Home</Link>
          </li>
          <li >
            <Link to="/books" >Books</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar