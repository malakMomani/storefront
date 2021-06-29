import React from 'react';
import Categories from './components/Categories';
import Products from './components/Products';

import Header from './components/Header';
import Footer from "./components/Footer";

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