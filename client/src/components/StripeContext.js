import React, { createContext, useState, useEffect, useContext } from "react";
import { productsData } from "./stripedata";
export const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(productsData);
  const [cart, setCart] = useState([]);

  // function addToCart(product) {
  //   const itemIndex = cart.findIndex((item) => item.product.id === product.id);
  //   // console.log("isExistsInCart:" + itemIndex);
  //   if (itemIndex <= -1) {
  //     setCart((prevItems) => [...prevItems, { product, qty: 1 }]);
  //   } else {
  //     setCart((prevItems) =>
  //       prevItems.map((item) =>
  //         item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   }
  // }
  function addToCart(product) {
    const itemIndex = cart.findIndex((item) => item.product.id === product.id);

    if (itemIndex <= -1) {
      setCart((prevItems) => [
        ...prevItems,
        { product: { ...product, qty: 1 } },
      ]);
    } else {
      setCart((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id
            ? { product: { ...item.product, qty: item.product.qty + 1 } }
            : item
        )
      );
    }
  }

  function incrementQty(product) {
    const updatedArray = cart.map((item) => {
      if (item.product.id === product.id) {
        return {
          ...item,
          product: { ...item.product, qty: item.product.qty + 1 },
        };
      } else {
        return item;
      }
    });
    setCart(updatedArray);
  }

  function decrementQty(product) {
    const updatedArray = cart.map((item) => {
      if (item.product.id === product.id) {
        return {
          ...item,
          product: { ...item.product, qty: item.product.qty - 1 },
        };
      } else {
        return item;
      }
    });
    setCart(updatedArray);
  }
  // function removeFromCart(id) {
  //   const afterDeleteUpdatedArray = cart.filter((item) => item.id !== id);
  //   setCart(afterDeleteUpdatedArray);
  // }

  // function emptyTheCart() {
  //   setCart([]);
  // }
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
      value={{
        productData,
        setProductData,
        cart,
        setCart,
        addToCart,
        incrementQty,
        decrementQty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
