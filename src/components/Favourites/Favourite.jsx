import React from 'react'
// import React, { useEffect, useState } from 'react'
import './Favourite.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../state/context/cart_context';
// import axios from "axios";

const Favourite = () => {

    const{addToCart} = useCartContext();
    const cardData =[
        {
            id:121,
            src:"https://images.unsplash.com/photo-1618411640018-972400a01458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxicmVhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Donut",
            Cost:"250",
            buttonCost:"Order Now"
        },
        {
            id:122,
            src:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Paneer-Do0Pyaza",
            Cost:"320",
            buttonCost:"Order Now"
        },
        {
            id:123,
            src:"https://images.unsplash.com/photo-1609167921919-9436787fdecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Mutton Burger",
            Cost:"350",
            buttonCost:"Order Now"
        },
        {
            id:124,
            src:"https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            FoodName:"Mutton Margherita",
            Cost:"450",
            buttonCost:"Order Now"
        },
        {
            id:125,
            src:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Vegetable Salad",
            Cost:"160",
            buttonCost:"Order Now"
        },
        {
            id:126,
            src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Mexico Pizza",
            Cost:"510",
            buttonCost:"Order Now"
        },
        {
            id:127,
            src:"https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Bread Edd Crambled",
            Cost:"230",
            buttonCost:"Order Now"
        },
        {
            id:128,
            src:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Kabab Pind",
            Cost:"375",
            buttonCost:"Order Now"
        },
        {
            id:129,
            src:"https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            FoodName:"Fish Curry",
            Cost:"299",
            buttonCost:"Order Now"
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
    <h5 className="card-title ">{item.FoodName}</h5>
    <h6 className="card-text">₹ {item.Cost}</h6>
    <Link to={'/Cart'} onClick={()=>addToCart(item.id,item.FoodName,item.Cost,item.src)} className='btn btn-danger'>Order Now</Link>
  </div>
</div>
    ))} 
    </div>
    </>
  )
}

export default Favourite