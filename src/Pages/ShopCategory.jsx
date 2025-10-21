import React, { useContext } from "react";
import "../CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_imgss from "../assets/dropdown_imgss.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!Array.isArray(all_product)) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1–12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_imgss} alt="" height="30px" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
// import React from 'react'

// const ShopCategory = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ShopCategory
