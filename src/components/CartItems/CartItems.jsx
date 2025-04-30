import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const { getTotalCartAmount, cartItems, all_product, removeFromCart, addToCart } = useContext(ShopContext)

  const priceIncrements = {
    "128 GB": 0,
    "256 GB": 40,
    "512 GB": 80,
    "1 TB": 120,
  };

  // New state for promo code, discount and error message
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [promoError, setPromoError] = useState('')

  // Handler for promo code input change
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value)
    setPromoError('') // Clear error on input change
  }

  // Handler for promo code submit
  const handleApplyPromoCode = () => {
    if (promoCode.trim().toUpperCase() === 'SHIVANK10') {
      const subtotal = getTotalCartAmount()
      const discountValue = subtotal * 0.10
      setDiscount(discountValue)
      setPromoError('')
    } else {
      setDiscount(0)
      setPromoError('Apply SHIVANK10 to get 10% discount')
    }
  }

  // Calculate total after discount
  const subtotal = getTotalCartAmount()
  const totalAfterDiscount = subtotal - discount

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Size</p>
      </div>
      <hr />

{cartItems.map((cartItem, index) => {
  const product = all_product.find(p => p.id === Number(cartItem.itemId))
  if (!product) return null
  return (
    <div key={index}>
      <div className="cartitems-format cartitems-format-main">
        <span className="cart-label-mobile">Products:</span>
        <img src={product.image} alt="" className='carticon-product-icon' />
        
        <span className="cart-label-mobile">Title:</span>
        <Link to={`/product/${product.id}`} className='cartitem-product-name' style={{ color: 'black', textDecoration: 'none' }}>
          {product.name}
        </Link>
        
        <span className="cart-label-mobile">Price:</span>
        <p>${cartItem.adjustedPrice}</p>
        
        <span className="cart-label-mobile">Quantity:</span>
        <div className='cartitems-quantity-control'>
          <button className='quantity-btn minus-btn' onClick={() => removeFromCart(cartItem.itemId, cartItem.size)}>-</button>
          <span className='cartitems-quantity'>{cartItem.quantity}</span>
          <button className='quantity-btn plus-btn' onClick={() => addToCart(cartItem.itemId, cartItem.size, priceIncrements[cartItem.size])}>+</button>
        </div>
        
        <span className="cart-label-mobile">Total:</span>
        <p>${cartItem.adjustedPrice * cartItem.quantity}</p>
        
        <span className="cart-label-mobile">Size:</span>
        <p>{cartItem.size}</p>
        
       
      </div>
      <hr />
    </div>
  )
})}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Discount</p>
              <p className='discount_value'>${discount.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${totalAfterDiscount.toFixed(2)}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' value={promoCode} onChange={handlePromoCodeChange} />
            <button onClick={handleApplyPromoCode}>Submit</button>
          </div>
          {promoError && <p style={{ color: 'red', marginTop: '5px' }}>{promoError}</p>}
        </div>
      </div>
    </div>
  )
}

export default CartItems
