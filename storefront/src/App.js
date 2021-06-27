import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Categories from './components/Categories';
import Products from './components/Products.js'

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}


export default App;
