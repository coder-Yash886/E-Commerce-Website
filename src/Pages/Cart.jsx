// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       Cart
//     </div>
//   )
// }

// export default Cart
// 
// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Cart

// import React, { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";

// const Cart = () => {
//   const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {Object.keys(cartItems).length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         all_product
//           .filter((p) => cartItems[p.id])
//           .map((p) => (
//             <div key={p.id} className="cart-item">
//               <img src={p.image} alt={p.name} width="60" />
//               <div>
//                 <h4>{p.name}</h4>
//                 <p>Qty: {cartItems[p.id]}</p>
//                 <p>Price: ₹{p.new_price * cartItems[p.id]}</p>
//               </div>
//               <button onClick={() => removeFromCart(p.id)}>Remove</button>
//             </div>
//           ))
//       )}
//       <h3>Total: ₹{getTotalCartAmount()}</h3>
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";


const Cart = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const total = getTotalCartAmount();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>No items in cart</p>
      ) : (
        all_product
          .filter((p) => cartItems[p.id])
          .map((p) => (
            <div key={p.id} className="cart-item">
              <img src={p.image} alt={p.name} width="60" />
              <div>
                <h4>{p.name}</h4>
                <p>Qty: {cartItems[p.id]}</p>
                <p>Price: ₹{p.new_price * cartItems[p.id]}</p>
              </div>
              <button onClick={() => removeFromCart(p.id)}>Remove</button>
            </div>
          ))
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
