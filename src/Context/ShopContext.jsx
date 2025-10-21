// import React, { createContext } from "react";
// //import all_product from "../assets/all_product"; 

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   return (
//     <ShopContext.Provider value={{}}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider; 
 
//  import React from 'react'
 
//  const ShopContext = () => {
//    return (
//      <div>
       
//      </div>
//    )
//  }
 
//  export default ShopContext
//  import React, { createContext, useState } from "react";
// import all_product from "../assets/all_product"; // your products array

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const [products] = useState(all_product);

//   return (
//     <ShopContext.Provider value={{ all_product: products }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
// import React, { createContext, useState } from "react";
// import all_product from "../assets/all_product"; // make sure this file exports default

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const [products] = useState(all_product);

//   return (
//     <ShopContext.Provider value={{ all_product: products }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


// import React, { createContext, useState } from "react";
// import all_product from "../assets/all_product";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const [products] = useState(all_product);
//   const [cartItems, setCartItems] = useState({});

//   // 🛒 Add to cart
//   const addToCart = (productId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [productId]: (prev[productId] || 0) + 1,
//     }));
//   };

//   // ❌ Remove from cart
//   const removeFromCart = (productId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev };
//       if (updated[productId] > 1) updated[productId]--;
//       else delete updated[productId];
//       return updated;
//     });
//   };

//   // 🧾 Calculate total
//   const getTotalCartAmount = () => {
//     return Object.entries(cartItems).reduce((total, [id, qty]) => {
//       const item = products.find((p) => p.id === Number(id));
//       return item ? total + item.new_price * qty : total;
//     }, 0);
//   };

//   const contextValue = {
//     all_product: products,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products] = useState(all_product);
  const [cartItems, setCartItems] = useState({});

  // 🛒 Add to cart
  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  // ❌ Remove from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) updated[productId]--;
      else delete updated[productId];
      return updated;
    });
  };

  // 💰 Total amount
  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const item = products.find((p) => p.id === Number(id));
      return item ? total + item.new_price * qty : total;
    }, 0);
  };

  const contextValue = {
    all_product: products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
