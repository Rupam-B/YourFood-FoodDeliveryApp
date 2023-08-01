import React from 'react'
import './Home.css'
import Offers from './Offers'

const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className='image-container'>
        <img src="/assets/background2.jpg" alt="" srcset="" />
      <div className='overlay'></div>
      </div>
      <h1>YourFood</h1>
      <h3>The Delicious Food Store</h3>
    </div>
    <Offers/>
    </>
  )
}

export default Home