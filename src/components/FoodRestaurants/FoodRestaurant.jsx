import React from 'react'
import './FoodRestaurant.css'
import { useParams } from 'react-router-dom';
import FoodRestaurantsdata1 from './FoodRestaurantsData';

const FoodRestaurant = () => {
  let { id } = useParams();
  id = parseInt(id);
  const accessdata = FoodRestaurantsdata1.FoodRestaurantsdata1;
// console.log(accessdata,accessdata[0].id,id);
  const d1 = accessdata.find(items => items.id === id);
  console.log(d1)
  console.log(d1.hotelName)
  return (
    <>
      
      <div className='FoodRestaurant'>
        <div className="bg-dark text-center contaainer">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bolder text-danger">{d1.hotelName}</h1>
              <p className="lead text-primary">{d1.state}</p>
              <p>
                <a href="/" className="btn btn-primary mx-2"> Email </a>
                <a href="/Restaurants" className="btn btn-secondary mx-2">Call</a>
              </p>
            </div>
          </div>
        </div>
        
        <div  className='rest-card'>
      {d1.data.map((items)=>(
        <div key={items.id} class="col border-none main-card" >
          <div class="card shadow-sm main-card">
            <img src={items.src} alt="" width='100%' height='300' className='object-fit' style={{ borderRadius: '2rem 2rem 0 0' }} />
            <div class="card-body wheatbg" style={{ borderRadius: '0 0 2rem 2rem' }}>
              <p class="card-text fw-bolder">{items.FoodName}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary">{items.Cost}</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>

         


      </div> 
      
        

    </>
  )
}

export default FoodRestaurant