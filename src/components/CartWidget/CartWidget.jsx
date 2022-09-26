import '../CartWidget/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    return (
        <div>
            <button className="cart-button mx-3"><FontAwesomeIcon className="fa-2x" icon={faCartShopping} />

            <span className="bubble">
                4
            </span>
            </button>
        </div>
    )
};
