import React from 'react'
import './Breadcrum.css'
import arroow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arroow_icon} alt="" /> SHOP <img src={arroow_icon} alt="" /> {product.category} <img src={arroow_icon} alt="" /> {product.name}

    </div>
  )
}

export default Breadcrum
