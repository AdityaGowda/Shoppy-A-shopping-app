// react is imported from react
// product-lists is imported from product-lists
// Router is imported from the react-router-dom
// product-details is imported from product-details
// Item-lists is imported from the item-lists
// cart-items is imported from the cart-items 
import React from 'react';
import ProductLists from './components/product-lists/Product-lists';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ProductDetails from './components/product-item-details/Product-Item-Detail';
import ItemLists from './components/item-lists/Item-Lists';
import CartItems from './components/cart-item/Cart-Items';
import Contact from './components/contact';
import About from './components/about';

// app function is created
const App = () => {
  return (
    <BrowserRouter basename='/Shoppy-A-shopping-app'>
      <Routes>
        <Route path="/" element={<ProductLists />}/>
          <Route path="/product-lists/:catagory" element={<ItemLists/>} />
          <Route path="/items-lists/:catagory/:itemId" element={<ProductDetails />} />
          <Route path="/product-lists/cart" element={<CartItems />} />
          <Route path="/contact"  element={<Contact />}/>
          <Route path="/about"  element={<About />}/>
      </Routes>
     </BrowserRouter>
  );
};

export default App;