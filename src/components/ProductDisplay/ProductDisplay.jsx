import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState("128 GB");

  const priceIncrements = {
    "128 GB": 0,
    "256 GB": 40,
    "512 GB": 80,
    "1 TB": 120,
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const adjustedOldPrice = product.old_price + priceIncrements[selectedSize];
  const adjustedNewPrice = product.new_price + priceIncrements[selectedSize];

  // Calculate quantity for product and selected size
  const quantity = cartItems.find(
    (item) => item.itemId === product.id && item.size === selectedSize
  )?.quantity || 0;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="producdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${adjustedOldPrice}
          </div>
          <div className="productdisplay-right-price-new">
            ${adjustedNewPrice}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Offers sleek designs, and AI-powered features for smarter navigation. With longer battery life, fast charging, and high-resolution cameras, they deliver enhanced performance, intuitive user interfaces, and professional-quality photos and videos for an optimal experience.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {Object.keys(priceIncrements).map((size) => (
              <div
                key={size}
                onClick={() => handleSizeClick(size)}
                style={{
                  cursor: "pointer",
                  fontWeight: selectedSize === size ? "bold" : "normal",
                  border: selectedSize === size ? "2px solid black" : "none",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        {quantity === 0 ? (
          <button onClick={() => addToCart(product.id, selectedSize, priceIncrements[selectedSize])}>Add To Cart</button>
        ) : (
          <div className="quantity-counter" role="group" aria-label="Quantity counter">
            <span className="counter-btn minus-btn"
              onClick={() => removeFromCart(product.id, selectedSize)}
              aria-label="Decrease quantity">-</span>
            <span className="quantity-count" aria-live="polite" aria-atomic="true">{quantity}</span>
            <span className="counter-btn plus-btn"
              onClick={() => addToCart(product.id, selectedSize, priceIncrements[selectedSize])}
              aria-label="Increase quantity">+</span>
          </div>
        )}
        <p className="productdisplay-right-category">
          <span>Category :</span>Smartphones 
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
