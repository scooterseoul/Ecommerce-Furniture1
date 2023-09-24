import React from "react";
import { Routes, Route } from "react-router-dom";

// Components for each route
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* You can add a Navbar here if needed */}

        <Route path="/" element={<Home />} />
        <Route path="/rooms/:room" element={<Rooms />} />
        <Route path="/categories/:catagory" element={<Categories />} />

        {/* You can add a 404 Not Found route here if needed */}
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
