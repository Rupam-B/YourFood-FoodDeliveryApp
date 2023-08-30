import React from 'react'
import './PaymentSuccesStyle.css'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  
  return (
    <>
    <div className='Payment-container'>
      <div className='Success-Box'>
        
        <h1>Order Confirmed !</h1>
      </div>
      <Link to={'/'} className='payment-cross-div'><i className='payment-cross' class="fa-solid fa-xmark"></i></Link>

    </div>
    </>
  )
}

export default PaymentSuccess