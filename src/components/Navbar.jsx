import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../state/context/cart_context'

const Navbar = () => {
  const {cart,checkArr}= useCartContext();
  return (
    <>
    <nav className='nav-bar'>
        <ul>
          <li >
            <Link to="/"  >Home</Link>
          </li>
          <li >
            <Link to="/Restaurants" >Restaurants</Link>
          </li>
          <li className='Log-In-positioning' >
            <Link className='Log-In-positioning-link' to="/Authen" >
            <div className='Log-In'><i className="fa-solid fa-user user-icon"></i></div>
            <div className='Auth-user-name'>{checkArr.newname?checkArr.newname:'user'}</div>
            </Link>
          </li>
          <li className='cart-positioning'>
            <Link to="/Cart" ><i className="fa-solid fa-cart-shopping"></i></Link>
            <div className='cart-item-positioning'>{cart.length}</div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar