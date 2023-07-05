import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemContainer from './containers/item-container';
import NavBar from './components/nav-bar';
import ProductDetailsContainer from './containers/product-detail-container';
import React from 'react';

  function App() {
  React.useEffect(() => {
    const listener = window.addEventListener('resize', onResize);

    return () => window.removeEventListener(listener, onResize);

  }, [])
  const onResize = (event) => {

    const height = event.target.innerHeight;
    const width = event.target.innerWidth;


    console.info(`nueva resolucion: ${width} x ${height}`)
  }

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path={'/'} element={<ItemContainer />} />
        <Route path={'/products/:category'} element={<ItemContainer />}  />
        <Route path={'/product/:id'} element={<ProductDetailsContainer />}  />
        <Route path="/cart" element={<p>cart</p>} />
        <Route path="/*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
