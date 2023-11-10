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

  // function getProductQty(product) {
  //   // const productInCart = cart.filter((item) => item.product.id === product.id);
  //   // console.log("JJJJ :" + productInCart.product.qty);
  //   // return productInCart.qty;
  //   const cartAfterAdd = cart.find((item) => item.product.id === product.id);
  //   // cartAfterAdd &&
  //   console.log("JJJJ :" + JSON.stringify(cartAfterAdd));
  //   let qty = 0;
  //   if (!cartAfterAdd) {
  //     alert("11");
  //     qty = 1;
  //   } else if (cartAfterAdd.product.qty > 0) {
  //     alert("222");
  //     qty = cartAfterAdd.product.qty + 1;
  //   }
  //   console.log("JJJJ :" + JSON.stringify(cartAfterAdd));
  //   // const qty = !cartAfterAdd ? 1 : cartAfterAdd.product.qty + 1;
  //   // const qty = cartAfterAdd && cartAfterAdd.product.qty + 1;
  //   product.qty = qty;

  //   const updatedArray = productData.map((item) => {
  //     if (item.id === product.id) {
  //       return {
  //         ...item,
  //         product: { ...item.product, qty: qty },
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setProductData(updatedArray);
  //   // return product;
  // }

  function incrementQty(product) {
    // const updatedArray = cart.map((item) => {
    //   if (item.product.id === product.id) {
    //     return {
    //       ...item,
    //       product: { ...item.product, qty: item.product.qty + 1 },
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    // setCart(updatedArray);
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
    // const productAfterupdate = cart.find((item) => item.id === product.id);
    // console.log("JJJJ :" + JSON.stringify(productAfterupdate));
    // product.qty = productAfterupdate.product.qty;
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
    // console.log("REEMMOOVEE : " + id);
    const cartAfterDelete = cart.filter((item) => item.product.id !== id);
    setCart(cartAfterDelete);
  }

  // function emptyTheCart() {
  //   setCart([]);
  // }
  // console.log(productData);
  // alert("STRipeContext");

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
        cartItemsCount,
        addToCart,
        // getProductQty,
        incrementQty,
        decrementQty,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
