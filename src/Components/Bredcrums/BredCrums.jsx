// import React from 'react'
// import './BredCrums.css'
// import arrow_icons from '../../assets/arrow_icons.png'
// //import Product from '../../Pages/Product'

// const Bredcrums = (props) => {
// const {product} = props;

//   return (
//     <div className='breadcrumd'>
//         Home <img src={arrow_icons} alt="" height='10px' /> SHOP <img src={arrow_icons} alt="" height='10px' />
//         {product.category} <img src={arrow_icons} alt="" height='10px' /> {product.name} <img src={arrow_icons} alt="" height='10px' />
//     </div>
//   )
// }

// export default Bredcrums
import React from 'react'
import './BredCrums.css'

const BredCrums = ({ product }) => {
  if (!product) {
    return <div className='bredcrums'>Loading...</div>
  }

  return (
    <div className='bredcrums'>
      Home / {product.category} / {product.name}
    </div>
  )
}

export default BredCrums
