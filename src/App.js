
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurants/Restaurant';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Restaurants' element={<Restaurant/>}/>
      </Routes>
       
      </>
  );
}

export default App;
