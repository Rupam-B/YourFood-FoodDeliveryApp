import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../state/context/cart_context'

const Navbar = () => {
  const {cart}= useCartContext();
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
          <li className='cart-positioning'>
            <Link to="/Cart" ><i class="fa-solid fa-cart-shopping"></i></Link>
            <div className='cart-item-positioning'>{cart.length}</div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar