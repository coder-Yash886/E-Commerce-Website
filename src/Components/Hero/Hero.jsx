import React from 'react';
import './Hero.css';
import hand_icons from '../../assets/hand_icons.png';
import arrow_icons from '../../assets/arrow_icons.png';
import mens from '../../assets/mens.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Best Deals ! Best Prices !</h2>

        <div className='hero-hand-icon'>
          <p>new</p>
          <img src={hand_icons} alt="hand icon" height='60px'/>
        </div>

        <div className='hero-text'>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icons} alt="arrow icon" height='30px' />
        </div>
        
      </div>

      <div className='hero-right'>
        <img src={mens} alt="mens fashion" className='hero-img' height='750px' />
        
      </div>
    </div>
  );
};

export default Hero;
