import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Home from './Component/Home/home';
import Shop from './Component/Shop/shop';
import Pages from './Component/Pages/pages';
import Blog from './Component/Blog/blog';
import Contact from './Component/Contact/contact';
// import Header from './Component/Header/header';
import Footer from './Component/Footer/footer';
import Checkout from './Component/Checkout/checkout';
import BlogDetails from './Component/BlogDetails/blog_d';
import Cart from './Component/Cart/cart';
import ShopDetails from './Component/ShopDetails/shop_d';
import CategorySlider from './Component/Carousel/carousel';
import Slider from './Component/Slider/slider';


function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/pages" element={<Pages />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/blog_d" element={<BlogDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/shop_d" element={<ShopDetails />}></Route>





    </Routes>
    </BrowserRouter>
      );
}

export default App;
