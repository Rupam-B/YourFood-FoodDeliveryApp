import React from 'react'
// import React, { useEffect, useState } from 'react'
import './Favourite.css';
import { Link } from 'react-router-dom';
// import axios from "axios";

const Favourite = () => {
    const cardData =[
        {
            id:1,
            src:"https://images.unsplash.com/photo-1618411640018-972400a01458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxicmVhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Donut",
            para:"₹ 250.00",
            buttonPara:"Order Now"
        },
        {
            id:2,
            src:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Paneer-Do0Pyaza",
            para:"₹ 320.00",
            buttonPara:"Order Now"
        },
        {
            id:3,
            src:"https://images.unsplash.com/photo-1609167921919-9436787fdecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Mutton Burger",
            para:"₹ 350.00",
            buttonPara:"Order Now"
        },
        {
            id:4,
            src:"https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            heading:"Mutton Margherita",
            para:"₹ 450.00",
            buttonPara:"Order Now"
        },
        {
            id:5,
            src:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Vegetable Salad",
            para:"₹ 160.00",
            buttonPara:"Order Now"
        },
        {
            id:6,
            src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Mexico Pizza",
            para:"₹ 510.00",
            buttonPara:"Order Now"
        },
        {
            id:7,
            src:"https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Bread Edd Crambled",
            para:"₹ 230.00",
            buttonPara:"Order Now"
        },
        {
            id:8,
            src:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            heading:"Kabab Pind",
            para:"₹ 375.00",
            buttonPara:"Order Now"
        },
        {
            id:9,
            src:"https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
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
      <div className="card adjst-wd"  key={item.id}>
  <img src={item.src} className="card-img-top object-fit" alt="..."/>
  <div className="card-body d-flex flex-column justify-content-center align-items-center">
    <h5 className="card-title ">{item.heading}</h5>
    <h6 className="card-text">{item.para}</h6>
    <Link to={'/Cart'} className='btn btn-danger'>Order Now</Link>
  </div>
</div>
    ))} 
    </div>
    </>
  )
}

export default Favourite