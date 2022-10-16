import React, { useState } from "react";

export const CartContext = React.createContext();

export const CustomProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (newProduct) => {
        const newProducts = [...cartProducts];
        newProducts.push(newProduct);
        setCartProducts(newProducts);
    }

    return (
        <CartContext.Provider value={{ cartProducts:cartProducts, addProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}
