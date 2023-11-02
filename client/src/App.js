import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Components for each route
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SingleItem from "./components/SingleItem";
import DiscountSection from "./components/DiscountSection";

import { ProductProvider } from "./components/StripeContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:products" element={<Products />} />
        <Route path="/item/:id" element={<SingleItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/discount" element={<DiscountSection />} />

        {/* add a 404 Not Found route here if needed */}
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
