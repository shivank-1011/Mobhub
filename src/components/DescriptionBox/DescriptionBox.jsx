import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="desriptionbox-navigator">
        <div className="desriptionbox-nav-box">Description</div>
        <div className="desriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="desriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. It serves as a virtual marketplace where businesses and consumers can interact, conduct transactions, and exchange products or services.</p>
        <p> Additionally, user accounts offer personalized experiences, order tracking, and seamless access to past purchases. The site often incorporates promotions, discounts, and responsive design to enhance user engagement across devices. With a focus on security, convenience, and a visually appealing layout, the e-commerce website aims to deliver a satisfying and efficient shopping experience for customers.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
