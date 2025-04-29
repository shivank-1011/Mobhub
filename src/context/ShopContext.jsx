import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    return [];
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId, size = "128 GB", priceIncrement = 0) => {
        setCartItems((prev) => {
            // Check if item with same id and size exists
            const existingIndex = prev.findIndex(
                (item) => item.itemId === itemId && item.size === size
            );
            const baseProduct = all_product.find(product => product.id === Number(itemId));
            const basePrice = baseProduct ? baseProduct.new_price : 0;
            if (existingIndex >= 0) {
                // Increase quantity of existing item
                const updatedCart = [...prev];
                updatedCart[existingIndex].quantity += 1;
                return updatedCart;
            } else {
                // Add new item with quantity 1
                return [
                    ...prev,
                    {
                        itemId,
                        size,
                        quantity: 1,
                        adjustedPrice: basePrice + priceIncrement,
                    },
                ];
            }
        });
    };

    const removeFromCart = (itemId, size = "128 GB") => {
        setCartItems((prev) => {
            const existingIndex = prev.findIndex(
                (item) => item.itemId === itemId && item.size === size
            );
            if (existingIndex === -1) return prev;
            const updatedCart = [...prev];
            if (updatedCart[existingIndex].quantity === 1) {
                // Remove item from cart
                updatedCart.splice(existingIndex, 1);
            } else {
                // Decrease quantity
                updatedCart[existingIndex].quantity -= 1;
            }
            return updatedCart;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item of cartItems) {
            totalAmount += item.adjustedPrice * item.quantity;
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item of cartItems) {
            totalItem += item.quantity;
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
