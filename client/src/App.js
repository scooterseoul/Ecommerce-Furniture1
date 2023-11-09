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
import CategorySofas from "./components/CategorySofas";
import CategoryTables from "./components/CategoryTables";
import CategoryAccessories from "./components/CategoryAccessories";
import CategoryOffice from "./components/CategoryOffice";

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
        <Route path="/sofas" element={<CategorySofas />} />
        <Route path="/tables" element={<CategoryTables />} />
        <Route path="/accessories" element={<CategoryAccessories />} />
        <Route path="/office" element={<CategoryOffice />} />

        {/* add a 404 Not Found route here if needed */}
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
