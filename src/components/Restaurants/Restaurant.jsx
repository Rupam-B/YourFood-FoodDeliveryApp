import React from 'react'
import './Restaurant.css'
import { Link } from 'react-router-dom'

const Restaurant = () => {

  const restaurantData =[
    {
        id:1,
        src:"/assets/Restaurant1.jpg",
        state:'Chhattisgarh',
        Name:"Silver Oak",
        rating:"4.5",
        menu:"Chicken curry, Paneer Masala , Veg Pulaw",
        link:'../FoodRestaurant/FoodRestaurant.jsx'
    },
    {
        id:2,
        src:"/assets/Restaurant2.jpg",
        state:'Pune',
        Name:"Red Diamond",
        rating:"4.6",
        menu:"Paneer Handi ,Mutton Biryani, Egg Fry"
    },
    {
        id:3,
        src:"/assets/Restaurant3.jpg",
        state:'Kolkata',
        Name:"Bengal food",
        rating:"4.7",
        menu:"Fish Curry, Muttor Keema , Veg Pulaw"
    },
    {
        id:4,
        src:"/assets/Restaurant4.jpg",
        state:'Andhra Pradesh',
        Name:"PaneeSilvam",
        rating:"4.6",
        menu:"Idli , Dosa , Dal Fry, Jeera Rice"
    },
    {
        id:5,
        src:"/assets/Restaurant5.jpg",
        state:'Odhisa',
        Name:"River Side",
        rating:"4.5",
        menu:"Chicken BhunaMasala, Daal Makhni , Veg Biryani"
    },
    {
        id:6,
        src:"/assets/Restaurant6.jpg",
        state:'Punjab',
        Name:"Balle Balle",
        rating:"4.8",
        menu:"Chicken Kadhai, Chole Kulche , Butter Naan"
    },
    {
        id:7,
        src:"/assets/Restaurant7.jpg",
        state:'Delhi',
        Name:"Royal Food",
        rating:"4.9",
        menu:"Mutton Kasa, Chiken Korma, Sai Paneer"
    },
    {
        id:8,
        src:"/assets/Restaurant8.jpg",
        state:'Bhopal',
        Name:"Anand Hotel",
        rating:"4.7",
        menu:"Fish Fry, Chicken Rezala, Tawa Rooti"
    }
]
  return (
    <>
    <div className="p-5 p-md-5 mb-1 rounded text-body-emphasis bg-dark"  style={{width:'100%',overflow:'hidden'}}>
    <div className="col-lg-6 px-0">
      <h1 style={{paddingTop:'2rem' , fontWeight:'bolder'}} className="display-4 fst-italic text-danger">Top Restaurants</h1>
      <p className="lead my-3 text-white">We serve you with the quality food from the top picks of most of the customer and gurantees to deliver on time</p>
      <br /><br />
      <p className="lead mb-0 text-white"><a href="/" className="text-body-emphasis fw-bold text-decoration-none text-primary">Explore...</a></p>
    </div>
    <img src="/assets/Restaurant10.jpg" alt="" srcset=""  className='Restimg'/>
  </div>
  <div className="row mb-2 black-bgrnd p-4" style={{width:'100%', overflow:'hidden'}}>
    {restaurantData.map((item)=>( 
    <div className="col-md-6 pt-5" key={item.id}>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-emphasis text-danger">{item.state}</strong>
          <h3 className="mb-0 text-white pb-2">{item.Name}</h3>
          <div className="mb-1 body-secondary text-danger">Rating {item.rating}</div>
          <p className="card-text mb-auto pb-2 text-white">{item.menu}</p>
          <Link to="/FoodRestaurant" className='btn btn-dark w-50 mt-2 text-primary'>Details</Link>
        </div>
        <div className="col-auto d-lg-block">
          <img src={item.src} className="bd-placeholder-img Rest-Card-img" alt="..."  />
        </div>
      </div>
    </div>
  ))}
  </div>
    </>
  )
}

export default Restaurant