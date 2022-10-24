import '../ItemCount/ItemCountStyles/ItemCountStyles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export function ItemCount({ onAdd }) {


    const [product, demandedProduct] = useState(1);

    const [goToCart, setGoToCart] = useState(false);


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


    if (goToCart === true) {
        return (
            <div>
                <div>
                    <h6 className="mt-4">Productos al carrito</h6>
                    <h4>{product}</h4>
                </div>

                <Link className="btn success" to="/"><Button className="btn btn-secondary">Seguir comprando</Button></Link>
                <Link to="/Cart"><Button className="btn btn-success">{<FontAwesomeIcon className="fa-2xl goToCart" icon={faCartShopping} />}</Button></Link>
            </div>
        )
    };


    return (
        <div className="d-flex flex-column align-items-center">
            <div className="counterDiv">
                <button className="btn btn-primary rounded-circle counterButton" onClick={removeProduct}>-</button>
                <div>{product}</div>
                <button className="btn btn-primary rounded-circle btn-lg counterButton" onClick={addProduct} >+</button>
            </div>
            <Button className="mt-3 counterButton" variant="primary" onClick={() => { onAdd(product); setGoToCart(true) }}>Add to {<FontAwesomeIcon className="fa-1x" icon={faCartShopping} />}</Button>
        </div>
    )

};
