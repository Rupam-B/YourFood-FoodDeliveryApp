import React from 'react'
// import React, { useEffect, useState } from 'react'
import './Favourite.css';
// import axios from "axios";

const Favourite = () => {
    const cardData =[
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
        },
        {
            id:7,
            src:"/assets/card7.jpg",
            heading:"Bread Edd Crambled",
            para:"₹ 230.00",
            buttonPara:"Order Now"
        },
        {
            id:8,
            src:"/assets/card8.jpg",
            heading:"Kabab Pind",
            para:"₹ 375.00",
            buttonPara:"Order Now"
        },
        {
            id:9,
            src:"/assets/card9.jpg",
            heading:"Fish Curry",
            para:"₹ 299.00",
            buttonPara:"Order Now"
        }
    ]
    // const [cardData,setCardData] = useState();
    // useEffect(() => {
    //     axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    //       .then(response => {
    //         console.log(response)
    //         setCardData(response.data.meals);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, []);


  return (
    <>
    <div className='containerr'>

    {cardData.map((item, index) => (
      <div className="card" style={{width:'18rem'}} key={item.id}>
  <img src={item.src} className="card-img-top object-fit" alt="..." height="200px"/>
  <div className="card-body d-flex flex-column justify-content-center align-items-center">
    <h5 className="card-title ">{item.heading}</h5>
    <h6 className="card-text">{item.para}</h6>
    <a href="/" className="btn btn-danger ">Order Now</a>
  </div>
</div>
    ))} 
    </div>
    </>
  )
}

export default Favourite