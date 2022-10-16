import '../CartWidget/CartWidgetStyles/CartWidgetStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {

    const {cartProducts} = useContext(CartContext);

    return (
        <div>
            <Link to={"/cart"}> <button className="cart-button mx-3"><FontAwesomeIcon className="fa-2x" icon={faCartShopping} />

                <span className="bubble">
                    {cartProducts.length} 
                </span>
            </button></Link>
        </div>
    )
};