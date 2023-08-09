import React from 'react'
import './FoodRestaurant.css'
import { useParams } from 'react-router-dom';
import FoodRestaurantsdata1 from './FoodRestaurantsData';
import { Link } from 'react-router-dom';

const FoodRestaurant = () => {
  let { id } = useParams();
  id = parseInt(id);


  const accessdata = FoodRestaurantsdata1.FoodRestaurantsdata1;


  const d1 = accessdata.find(items => items.id === id);
  

  
  const emailLocation =()=>{
    const to = 'rupam.banerje@gmail.com';
    const subject = 'Regarding Inquiry';
    const body = 'Hello,\n\nI am interested in your services.\n\nSincerely,\n[Your Name]';
    
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  const callLocation =()=>{
    const phoneNumber = '+917000771487'; 
      const telUrl = `tel:${phoneNumber}`;
      window.location.href = telUrl;
    };

  return (
    <>
      
      <div className='FoodRestaurant'>
        <div className="bg-dark text-center contaainer">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bolder text-danger">{d1.hotelName}</h1>
              <p className="lead text-primary">{d1.state}</p>
              <p>
                <button onClick={emailLocation} className="btn btn-primary mx-2"> Email </button>
                <button onClick={callLocation} className="btn btn-secondary mx-2">Call</button>
              </p>
            </div>
          </div>
        </div>
        
        <div  className='rest-card'>
      {d1.data.map((items)=>(
        <div key={items.id} class="col border-none main-card" >
          <div class="card shadow-sm main-card ">
            <img src={items.src} alt="" width='100%'  className='object-fit adjst-hgt' style={{ borderRadius: '2rem 2rem 0 0' }} />
            <div class="card-body wheatbg" style={{ borderRadius: '0 0 2rem 2rem' }}>
              <p class="card-text fw-bolder">{items.FoodName}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary">{items.Cost}</button>
                  <Link to={'/Cart'} className='btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary'>Order Now</Link>
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary">Order Now</button> */}
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