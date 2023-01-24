import { Route, Routes } from 'react-router-dom';
import Header from './layouts/header';
import AddProduct from './pages/add-product';
import HomePage from './pages/home';
import "./app.css"
import Footer from './layouts/footer';
import DetailPage from './pages/detail';
import { useState } from 'react';
import WishList from './pages/wishList';

function App() {
  const [wishList, setWishList] = useState([]);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage wishList={wishList} setWishList={setWishList} />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/home/:_id' element={<DetailPage />} />
        <Route path='/wishList' element={<WishList wishList={wishList} setWishList={setWishList} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
