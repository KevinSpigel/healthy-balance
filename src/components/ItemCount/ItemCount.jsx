import '../ItemCount/ItemCount.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function ItemCount() {

    const [product, demandedProduct] = useState(1)

    const addProduct = () => {
        demandedProduct(product + 1)
    };

    const removeProduct = () => {
        demandedProduct(product - 1)
    };

    return (
        <div>
            <div>{product}</div>
            <button onClick={addProduct} >+</button>
            <button onClick={removeProduct}>-</button>
            <button>Add to {<FontAwesomeIcon className="fa-1x" icon={faCartShopping} />}</button>
        </div>
    )

};
