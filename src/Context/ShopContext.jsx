import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let idx = 0; idx <= 300; idx++) {
    cart[idx] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, set_all_products] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // useEffect(() => {
  //   fetch("http://localhost:4000/allproducts")
  //     .then((res) => res.json())
  //     .then((data) => set_all_products(data));
  // }, []);
  // console.log(all_products)
  const addToCart = (id, quantity = 1) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [id]: prev[id] + quantity };
      console.log(updatedCart);
      return updatedCart;
    });
    console.log(cartItems);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const removeItem = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
  };
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id == Number(item)
        );

        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const totalCartItems = () => {
    let itemCnt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        itemCnt += cartItems[item];
      }
    }

    return itemCnt;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    removeItem,
    totalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
