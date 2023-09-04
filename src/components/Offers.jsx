import React, {useEffect} from 'react'
import './OffersStyle.css'


const Offers = () => {

    useEffect(() => {
      new window.bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval: 2500 
      });
    }, []);
   
  return (
    <>
    <div className='Offers'>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div className="image-container">
      <img src="/assets/offers111.jpg" alt="loading problem" className="bd-placeholder-img" width="100%"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
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
      <div className="image-container">
      <img src="/assets/offers211.jpg" alt="loading problem"  className="bd-placeholder-img " width="100%"   aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
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
      <div className="image-container">
      <img src="https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxmb29kJTIwaW1hZ2VzJTIwd2lkZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="loading problem"  className="bd-placeholder-img object-fit" width="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
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