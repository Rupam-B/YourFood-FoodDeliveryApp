import React from 'react'
import './Restaurant.css'
import { Link } from 'react-router-dom'
import FoodRestaurantsData1 from '../FoodRestaurants/FoodRestaurantsData'
const restaurantData = (FoodRestaurantsData1.FoodRestaurantsdata1)




const Restaurant = () => {

  return (
    <>
      <div className="p-5 p-md-5 mb-1 rounded text-body-emphasis bg-dark" style={{ width: '100%', overflow: 'hidden' }}>
        <div className="col-lg-6 px-0">
          <h1 style={{ paddingTop: '2rem', fontWeight: 'bolder' }} className="display-4 fst-italic text-danger">Top Restaurants</h1>
          <p className="lead my-3 text-white">We serve you with the quality food from the top picks of most of the customer and gurantees to deliver on time</p>
          <br /><br />
          <p className="lead mb-0 text-white"><a href="/" className="text-body-emphasis fw-bold text-decoration-none text-primary">Explore...</a></p>
        </div>
        <img src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZvb2QlMjByZXN0YXVyYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" srcSet="" className='Restimg' />
      </div>


      <div className="row mb-2 black-bgrnd p-4" style={{ width: '100%', overflow: 'hidden' }}>
        {restaurantData.map((items) => (

          <div key={items.id} className="col-md-6 pt-5" >
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-emphasis text-danger">{items.state}</strong>
                <h3 className="mb-0 text-white pb-2">{items.hotelName}</h3>
                <div className="mb-1 body-secondary text-danger">Rating {items.rating}</div>
                <p className="card-text mb-auto pb-2 text-white">{items.menu}</p>
                <Link to={`/FoodRestaurant/${items.id}`} className='btn btn-dark w-50 mt-2 text-primary'>Details</Link>
              </div>
              <div className="col-auto d-lg-block">
                <img src={items.src} className="bd-placeholder-img Rest-Card-img object-fit" alt="..." />
              </div>
            </div>
          </div>

        ))}


      </div>
    </>
  )
}

export default Restaurant