import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Components for each route
import { ProductProvider } from "./components/StripeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SingleItem from "./components/SingleItem";
import DiscountSection from "./components/DiscountSection";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:products" element={<Products />} />
          <Route path="/item/:id" element={<SingleItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/discount" element={<DiscountSection />} />

          {/* add a 404 Not Found route here if needed */}
          {/* <Route component={NotFound} /> */}
        </Routes>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;
