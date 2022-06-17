import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDraw from './components/SideDraw';


function App() {

  const [sideToggle,setsideToggle] = useState(false)
  return (
 
    <div className="App">
    
      
    <Navbar click={() =>setsideToggle(true)}/>
    <SideDraw show={sideToggle} click={() =>setsideToggle(false)}/>
    <Backdrop show={sideToggle} click={() =>setsideToggle(false)}/>
   
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
    </Routes>
    
      
    </div>
  
    
  );
}

export default App;
