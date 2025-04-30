import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'
import FadeInSection from '../FadeInSection/FadeInSectio';

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
  const isCartEmpty = cartItems.length === 0;

  // If cart is empty, display message
  if (isCartEmpty) {
    return (
      <div className="empty-cart">
        <FadeInSection>
          <div className="empty-cart-container">
            <svg width="100" height="100" viewBox="0 0 24 24">
              <path fill="#ff4141" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    );
  }

  return (
    <div className='cartitems'>
      <FadeInSection>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Size</p>
      </div>
      <hr />
      </FadeInSection>

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
      <FadeInSection style={{ transitionDelay: '0.2s' }}>
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
        </FadeInSection>
        <FadeInSection style={{ transitionDelay: '0.3s' }}>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' value={promoCode} onChange={handlePromoCodeChange} />
            <button onClick={handleApplyPromoCode}>Submit</button>
          </div>
          {promoError && <p style={{ color: 'red', marginTop: '5px' }}>{promoError}</p>}
        </div>
        </FadeInSection>
      </div>
    </div>
  )
}

export default CartItems
