import React from 'react'

const Offers = () => {
   
  return (
    <>
    <div className='Offers'><div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div class="image-container">
      <img src="/assets/offers111.jpg" alt="loading problem" srcset="" className="bd-placeholder-img" width="100%" height="200px"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
      <div className='overlay'></div>
      </div>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Full Veg Thaali</h1>
            <p className="opacity-75">Chapati, Daal Makhni, Pakoda, Matar Paneer, Aloo Gobhi </p>
            <p><a className="btn btn-lg btn-danger" href="/">Flat 20% Off</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div class="image-container">
      <img src="/assets/offers211.jpg" alt="loading problem" srcset="" className="bd-placeholder-img" width="100%" height="200px"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
      <div className='overlay'></div>
      </div>
        <div className="container">
          <div className="carousel-caption">
            <h1>Paalak Corn Paneer</h1>
            <p>Full fledge Onion, Garlic, Pepper, Ginger, Soya, Corn, Magherita</p>
            <p><a className="btn btn-lg btn-danger" href="/">Upto 40% Off</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div class="image-container">
      <img src="/assets/offers3111.jpg" alt="loading problem" srcset="" className="bd-placeholder-img" width="100%" height="200px"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
      <div className='overlay'></div>
      </div>
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Chicken Strew Soup</h1>
            <p>Healthy veggies, Fresh chicken, Pulses, Ginger Flavour</p>
            <p><a className="btn btn-lg btn-danger" href="/">Coupon! Upto 60% off</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
    </>
  )
}

export default Offers