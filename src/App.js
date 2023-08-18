
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurants/Restaurant';
import FoodRestaurant from './components/FoodRestaurants/FoodRestaurant';
import Cart from './components/CartAndCheckout/Cart';






function App() {

   
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Restaurants' element={<Restaurant/>}/>
        <Route path='/FoodRestaurant/:id' element={<FoodRestaurant/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>

    </>
  );
}

export default App;
