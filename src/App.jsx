import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Recipes from './Recipes.jsx';
import Categories from './Categories.jsx';
import Contact from './Contact.jsx'
import PageNOTFOUND from './PageNOTFOUND.jsx';
import Cart from './Cart.jsx'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path="*" element={<PageNOTFOUND />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
