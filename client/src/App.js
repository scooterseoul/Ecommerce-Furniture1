import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Components for each route
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { ProductProvider } from "./components/StripeContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <Routes>
        {/* add a Navbar here  */}

        <Route path="/" element={<Home />} />
        <Route path="/products/:products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        {/* add a cart page */}
        {/* add a 404 Not Found route here if needed */}
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
