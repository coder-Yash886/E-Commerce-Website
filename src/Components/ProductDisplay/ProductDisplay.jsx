// import React from 'react'
// import '.ProductDisplay.css'

// const ProductDisplay = () => {
//   return (
//     <div className='productdisplay'>
//         <div className='productdisplay-left'>
//           <div className='productdisplay-img-list'>
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//           </div>

//         </div>
//         <div className='productdisplay-right'>

//         </div>
//     </div>
//   )
// }

// export default ProductDisplay

//  import React from 'react'
// import './ProductDisplay.css'  

// const ProductDisplay = (props) => {
//   const {product} = props;
//   return (
//     <div className='productdisplay'>
//       <div className='productdisplay-left'>
//         <div className='productdisplay-img-list'>
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//         </div>
//       </div>
//       <div className='productdisplay-right'>

//       </div>
//     </div>
//   )
// }

// export default ProductDisplay
// const ProductDisplay = ({ product }) => {
//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className='productdisplay'>
//       <div className='productdisplay-left'>
//         <div className='productdisplay-img-list'>
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//         </div>
//       </div>
//       <div className='productdisplay-right'>

//       </div>
//     </div>
//   )
// }

// import React from 'react'
// import './ProductDisplay.css'

// const ProductDisplay = ({ product }) => {
//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className='productdisplay'>
//       <div className='productdisplay-left'>
//         <div className='productdisplay-img-list'>
//           <img src={product.image} alt="" height='200px' />
//           <img src={product.image} alt="" height='200px' />
//           <img src={product.image} alt="" height='200px' />
//           <img src={product.image} alt="" height='200px' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='''productdisplay-main-img' src={product.image} alt="" />

//         </div>
//       </div>
//       <div className='productdisplay-right'>
//         {/* Product details section */}
//         <h2>{product.name}</h2>
//         <p>Category: {product.category}</p>
//         <p>Price: ₹{product.new_price}</p>
//       </div>
//     </div>
//   )
// }

// export default ProductDisplay


// import React from 'react'
// import './ProductDisplay.css'

// const ProductDisplay = ({ product }) => {
//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className='productdisplay'>
//       <div className='productdisplay-left'>
//         <div className='productdisplay-img-list'>
//           <img src={product.image} alt="" height='200px' />
//           <img src={product.image} alt="" height='200px' />
//           <img src={product.image} alt="" height='200px' />
//           <img src={product.image} alt="" height='200px' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt="" height='500px' />
//         </div>
//       </div>

//       <div className='productdisplay-right'>
      
//         <h2>{product.name}</h2>
//         <p>Category: {product.category}</p>
//         <p>Price: ₹{product.new_price}</p>
//       </div>
//       <div className='productdisplay-right-description'>
//         Lorem ipsum dolor sit, amet consectetur
//         adipisicing elit. Iure laborum iste totam!
//         Cumque quod sequi perspiciatis id explicabo!
//         Tempora delectus iusto illo suscipit ipsam 
//         dicta rem quisquam illum. Aut, excepturi.

//       </div>
//       <div className='productdisplay-right-size'>
//         <h1>Select Size</h1>
//         <div className='productdisplay-right-size'>
//           <div>S</div>
//           <div>M</div>
//           <div>L</div>
//           <div>XL</div>
//           <div>XXL</div>
//           <button>ADD TO CART</button>
          

//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProductDisplay

// import React from 'react'
// import './ProductDisplay.css'

// const ProductDisplay = ({ product }) => {
//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className='productdisplay'>
//       {/* Left Section */}
//       <div className='productdisplay-left'>
//         <div className='productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>

//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt='' />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className='productdisplay-right'>
//         <h1 className='productdisplay-title'>{product.name}</h1>

//         <div className='productdisplay-prices'>
//           <span className='old-price'>₹999</span>
//           <span className='new-price'>₹{product.new_price}</span>
//         </div>

//         <p className='productdisplay-description'>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//            Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic 
//            autem, rem corrupti quibusdam? Quam omnis saepe et expedita 
//            ratione, quasi unde repudiandae.
//          </p>

//         <h3 className='size-heading'>Select Size</h3>

//          <div className='size-and-button'>           <div className='productdisplay-sizes'>
//              <div>S</div>
//              <div>M</div>
//              <div>L</div>
//              <div>XL</div>
//              <div>XXL</div>
//            </div>

//            <button className='addtocart-btn'>ADD TO CART</button>
//          </div>
//        </div>
//      </div>
//    )
//  }

//  export default ProductDisplay


// import React, { useContext } from 'react'
// import './ProductDisplay.css'
// import { ShopContext } from '../../Context/ShopContext'

// const ProductDisplay = ({ product }) => {
//   const { addToCart } = useContext(ShopContext)

//   if (!product) return <div>Loading...</div>

//   return (
//     <div className='productdisplay'>
//       {/* Left Section */}
//       <div className='productdisplay-left'>
//         <div className='productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt='' />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className='productdisplay-right'>
//         <h1 className='productdisplay-title'>{product.name}</h1>
//         <div className='productdisplay-prices'>
//           <span className='old-price'>₹999</span>
//           <span className='new-price'>₹{product.new_price}</span>
//         </div>
//         <p className='productdisplay-description'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic
//           autem, rem corrupti quibusdam? Quam omnis saepe et expedita
//           ratione, quasi unde repudiandae.
//         </p>

//         <h3 className='size-heading'>Select Size</h3>
//         <div className='size-and-button'>
//           <div className='productdisplay-sizes'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//           <button
//             className='addtocart-btn'
//             onClick={() => addToCart(product.id)}
//           >
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDisplay
  
import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1 className="productdisplay-title">{product.name}</h1>
        <div className="productdisplay-prices">
          <span className="old-price">₹999</span>
          <span className="new-price">₹{product.new_price}</span>
        </div>
        <p className="productdisplay-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti
          quibusdam? Quam omnis saepe et expedita ratione, quasi unde
          repudiandae.
        </p>

        <h3 className="size-heading">Select Size</h3>
        <div className="size-and-button">
          <div className="productdisplay-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>

          <button className="addtocart-btn" onClick={() => addToCart(product.id)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
