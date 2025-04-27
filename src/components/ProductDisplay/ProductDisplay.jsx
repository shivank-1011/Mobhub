import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const quantity = cartItems[product.id] || 0;

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
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          gorment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>128 GB</div>
            <div>256 GB</div>
            <div>512 GB</div>
            <div>1 TB</div>
          </div>
        </div>
        {quantity === 0 ? (
          <button onClick={() => addToCart(product.id)}>Add To Cart</button>
        ) : (
          <div className="quantity-counter" role="group" aria-label="Quantity counter">
            <span className="counter-btn minus-btn"
              onClick={() => removeFromCart(product.id)}
              aria-label="Decrease quantity">-</span>
            <span className="quantity-count" aria-live="polite" aria-atomic="true">{quantity}</span>
            <span className="counter-btn plus-btn"
              onClick={() => addToCart(product.id)}
              aria-label="Increase quantity">+</span>
          </div>
        )}
        <p className="productdisplay-right-category">
          <span>Category :</span>Women , T-Shirt , Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
