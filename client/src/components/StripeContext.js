import React, { createContext, useState, useEffect } from "react";
import { productsData } from "./stripedata";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(productsData);
  const [cart, setCart] = useState([]);
  // console.log(productData);
  // alert("STRipeContext");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_API_URL}/products`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.statusText}`);
  //       }
  //       console.log("NNN:" + JSON.stringify(response));
  //       const data = await response.json();

  //       setProductData(data);
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //   useEffect(() => {
  //     const storeData = async () => {
  //       try {
  //         const jsonValue = JSON.stringify(productData);
  //         await fetch(process.env.EXPO_PUBLIC_API_URL, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: jsonValue,
  //         });
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     };
  //     storeData();
  //   }, [productData]);

  return (
    <ProductContext.Provider
      value={{ productData, setProductData, cart, setCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
