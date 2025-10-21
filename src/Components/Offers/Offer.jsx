import React from 'react'
import './Offer.css'
import exclusive_imgss from '../../assets/exclusive_imgss.png'

const Offer = () => {
  return (
    <div className='offers'>Offers
    <div className='offers-left'>
    <h1>Exclusive</h1>
    <h1>Offers For You</h1>
    <p>ONLY ON BEST SELLERS PRODUCTS</p>
    <button>Check Now</button>
    </div>
    <div className='offers-right'>
        <img src={exclusive_imgss} alt="" />

    </div>
    </div>
  )
}

export default Offer
