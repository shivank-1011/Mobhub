import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icoon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  const scrollToPopular = () => {
    const popularSection = document.getElementById('popular-section');
    if (popularSection) {
      popularSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero'>
      <div className="hero-left">
       <div>
        <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
       </div>
       <button type="button" className="hero-latest-btn" onClick={scrollToPopular}>
        <div>Latest Collection</div>
        <img src={arrow_icoon} alt="" />
       </button>
      </div>
      <div className="hero-right">
       <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
