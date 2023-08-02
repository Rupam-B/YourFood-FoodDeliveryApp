
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurants/Restaurant';
import FoodRestaurant from './components/FoodRestaurants/FoodRestaurant';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Restaurants' element={<Restaurant/>}/>
        <Route path='/FoodRestaurant' element={<FoodRestaurant/>}/>
      </Routes>
       
      </>
  );
}

export default App;
