import React, { createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={{}}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; 
 
//  import React from 'react'
 
//  const ShopContext = () => {
//    return (
//      <div>
       
//      </div>
//    )
//  }
 
//  export default ShopContext
 