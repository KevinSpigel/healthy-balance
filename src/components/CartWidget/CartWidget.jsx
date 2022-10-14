import '../CartWidget/CartWidgetStyles/CartWidgetStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


export const CartWidget = () => {
    return (
        <div>
            <Link to={"/cart"}> <button className="cart-button mx-3"><FontAwesomeIcon className="fa-2x" icon={faCartShopping} />

                <span className="bubble">
                    4
                </span>
            </button></Link>
        </div>
    )
};
