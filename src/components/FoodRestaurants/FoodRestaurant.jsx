import React from 'react'
import './FoodRestaurant.css'

const FoodRestaurant = () => {

  const RestCardData =[
    {
        id:1,
        src:"/assets/card1.jpg",
        heading:"Fruit Bread",
        para:"₹ 250.00",
        buttonPara:"Order Now"
    },
    {
        id:2,
        src:"/assets/card2.jpg",
        heading:"Manchurian",
        para:"₹ 320.00",
        buttonPara:"Order Now"
    },
    {
        id:3,
        src:"/assets/card3.jpg",
        heading:"Mutton Burger",
        para:"₹ 350.00",
        buttonPara:"Order Now"
    },
    {
        id:4,
        src:"/assets/card4.jpg",
        heading:"Mutton Margherita",
        para:"₹ 450.00",
        buttonPara:"Order Now"
    },
    {
        id:5,
        src:"/assets/card5.jpg",
        heading:"Vegetable Salad",
        para:"₹ 160.00",
        buttonPara:"Order Now"
    },
    {
        id:6,
        src:"/assets/card6.jpg",
        heading:"Mexico Pizza",
        para:"₹ 510.00",
        buttonPara:"Order Now"
    }
  ]
  return (
    <>
    <div className='FoodRestaurant'>

    <div className="bg-dark text-center contaainer">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-bolder text-danger">Welcome to Silver Oak</h1>
        <p className="lead text-primary">Chhattisgarh</p>
        <p>
          <a href="/" className="btn btn-primary mx-2"> Email </a>
          <a href="/Restaurants" className="btn btn-secondary mx-2">Call</a>
        </p>
      </div>
    </div>
    </div>

    

    <div className='rest-card'>
        {RestCardData.map((items, index) => (
          <div class="col border-none main-card"  key={items.id}>
          <div class="card shadow-sm main-card">
            <img src={items.src} alt="" width='100%' height='300' style={{borderRadius:'2rem 2rem 0 0'}}/>
            <div class="card-body wheatbg" style={{borderRadius:'0 0 2rem 2rem'}}>
              <p class="card-text fw-bolder">{items.heading}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary">{items.para}</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary custom-outline-white fw-bolder text-secondary">{items.buttonPara}</button>
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