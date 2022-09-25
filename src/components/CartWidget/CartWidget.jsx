
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    return (
        <div>
            <button><FontAwesomeIcon className="fa-2x" icon={faCartShopping} />
            <span>
                4
            </span>
            </button>
        </div>
    )
};
