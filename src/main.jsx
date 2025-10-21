// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ShopContext } from './Context/ShopContext.jsx'

// createRoot(document.getElementById('root')).render(
//   //<StrictMode>
//   <ShopContextProvider>
//     <App />
//   </ShopContextProvider>

// )

//  import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
