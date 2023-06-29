import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemContainer from './containers/item-container';
import NavBar from './components/nav-bar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path={'/'} element={<ItemContainer />}  />
        <Route path={'/products/:category'} element={<ItemContainer />}  />
        <Route path={'/product/:id'} element={<p>producto 1</p>}  />
        <Route path={'/cart'} element={<p>cart</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
