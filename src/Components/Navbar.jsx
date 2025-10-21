// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../assets/logo.png";
// import cart_icon from "../assets/cart_icon.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="" height="50px" />
//         <p>Buy&Sale</p>
//       </div>

//       <ul className="nav-menu">
//         <li onClick={() => setMenu("home")}>
//           <Link style={{textDecoration:'none'}} to="/">Home</Link>
//           {menu === "home" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("mens")}>
//           <Link style={{textDecoration:'none'}} to="/mens">Men</Link>
//           {menu === "mens" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("womens")}>
//           <Link style={{textDecoration:'none'}} to="/womens">Women</Link>
//           {menu === "womens" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("kids")}>
//           <Link style={{textDecoration:'none'}} to="/kids">Kids</Link>
//           {menu === "kids" ? <hr /> : null}
//         </li>
//       </ul>

//       <div className="nav-login-cart">
//        <Link to='/login'> <button>Login</button></Link>
//         <Link to='/cart'><img src={cart_icon} alt="" height="50px" /></Link>
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext"; // 🟢 Import context

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  // 🟢 Get cart data from context
  const { cartItems } = useContext(ShopContext);

  // 🟢 Total items count
  const totalCartItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Buy&Sale</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <div style={{ position: "relative" }}>
          <Link to="/cart">
            <img src={cart_icon} alt="cart" height="50px" />
            {/* 🟢 Dynamic Cart Count */}
            <div className="nav-cart-count">{totalCartItems}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
