import '../ItemCount/ItemCountStyles/ItemCountStyles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';


export function ItemCount({onAdd}) {


    const [product, demandedProduct] = useState(1);


    const removeProduct = () => {
        if (product >= 2) {
            demandedProduct(product - 1)
        }
        else {
            demandedProduct(1)
        }
    };


    const addProduct = () => {
        demandedProduct(product + 1)
    };


    return (
        <div className="d-flex flex-column align-items-center">
            <div className="counterDiv">
                <button className="btn btn-primary rounded-circle counterButton" onClick={removeProduct}>-</button>
                <div>{product}</div>
                <button className="btn btn-primary rounded-circle btn-lg counterButton" onClick={addProduct} >+</button>
            </div>
            <Button className="mt-3 counterButton" variant="primary" onClick={() => onAdd(product)}>Add to {<FontAwesomeIcon className="fa-1x" icon={faCartShopping} />}</Button>
        </div>
    )

};
