import React, { createContext, useState, useEffect, useContext } from "react";
export const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);

        setProductData(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
  }, []);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.product.qty, 0);

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
    const cartAfterAdd = cart.find((item) => item.product.id === product.id);
    let qty = 0;
    if (!cartAfterAdd) {
      qty = 1;
    } else if (cartAfterAdd && cartAfterAdd.product.qty > 0) {
      qty = cartAfterAdd.product.qty + 1;
    }
    product.qty = qty;
    const updatedProductArray = productData.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          product: { ...item.product, qty: qty },
        };
      } else {
        return item;
      }
    });
    setProductData(updatedProductArray);
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

  function removeFromCart(id) {
    const cartAfterDelete = cart.filter((item) => item.product.id !== id);
    setCart(cartAfterDelete);
  }

  return (
    <ProductContext.Provider
      value={{
        productData,
        setProductData,
        cart,
        setCart,
        cartItemsCount,
        addToCart,
        incrementQty,
        decrementQty,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
