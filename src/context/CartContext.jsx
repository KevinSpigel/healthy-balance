import React, { useState } from "react";

export const CartContext = React.createContext();

export const CustomProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const isInCart = (id) => {
        const productExist = cartProducts.some((element) => element.id === id);
        return productExist;
    }

    const addProductToCart = (item, quantity) => {

        const cartProductsCopy = [...cartProducts];

        if (isInCart(item.id)) {
            const positionProduct = cartProductsCopy.findIndex((element) => element.id === item.id);
            cartProductsCopy[positionProduct].quantity += quantity;
            cartProductsCopy[positionProduct].quantityPrice = cartProductsCopy[positionProduct].quantity * cartProductsCopy[positionProduct].price;
            setCartProducts(cartProductsCopy);
        }
        else {

            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice: quantity * item.price
            };

            cartProductsCopy.push(newProduct);
            setCartProducts(cartProductsCopy);

        }
    }

    const getTotalPrice = () => {
        const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.quantityPrice, 0);
        return totalPrice;
    }

    const getTotalProducts = () => {
        const totalProducts = cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
        return totalProducts;
    }

    const removeItem=(id)=>{
        const newProducts=cartProducts.filter((element)=> element.id !==id);
        setCartProducts(newProducts);
    }

    return (
        <CartContext.Provider value={{ cartProducts, addProductToCart, getTotalPrice, getTotalProducts, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
