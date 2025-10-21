import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Foter from './Components/Foter/Foter'
import men_banner from './assets/men_banner.png'
import women_banner from './assets/women_banner.png'
import kids_banner from './assets/kids_banner.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Shop/>}/>
        <Route path='/mens' element= {<ShopCategory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element= {<ShopCategory banner = {women_banner} category="womens"/>}/>
        <Route path='/kids' element= {<ShopCategory banner={kids_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
      </Routes>
      <Foter/>
      </BrowserRouter>
  
    </div>
  )
}

export default App
