import React from 'react'
import './Home.css'
import Offers from './Offers'
import Favourite from './Favourites/Favourite'

const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className='image-container'>
        <img src="/assets/background2.jpg" alt="" />
      <div className='overlay'></div>
      </div>
      <h1>YourFood</h1>
      <h3>The Delicious Food Store</h3>
    </div>
    <Offers/>
    <Favourite/>
    </>
  )
}

export default Home