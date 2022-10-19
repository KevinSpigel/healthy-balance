import './CartContainerStyles/CartContainerStyles.css';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



export const CartContainer = () => {

    const value = useContext(CartContext);
    const { cartProducts, getTotalPrice, removeItem } = value;

    return (
        <div>
            <div style={{ width: "500px" }}>
                {
                    cartProducts.map((product) => (
                        <div>
                            <p>{product.name}</p>
                            <p>Precio unitario{product.price}</p>
                            <p>Cantidad{product.quantity}</p>
                            <p>Precio por cantidad{product.quantityPrice}</p>
                            <button onClick={() => removeItem(product.id)}>Eliminar producto</button>
                        </div>
                    ))

                }
                <p>Precio total: {getTotalPrice()} </p>
            </div>
        </div>
    )
}