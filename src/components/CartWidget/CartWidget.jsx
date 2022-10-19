import '../CartWidget/CartWidgetStyles/CartWidgetStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {

    const { getTotalProducts } = useContext(CartContext);

    return (
        <div>
            <Link to={"/Cart"}> <button className="cart-button"><FontAwesomeIcon className="fa-2xl" icon={faCartShopping} />

                <span className="bubble">
                    {getTotalProducts()}
                </span>
            </button></Link>
        </div>
    )
};