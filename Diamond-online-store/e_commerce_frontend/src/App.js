import React from 'react';
import ProductScreen from './screen/ProductScreen';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">E-Commerce</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
