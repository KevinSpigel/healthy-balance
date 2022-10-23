import './CartContainerStyles/CartContainerStyles.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartContainer = () => {

    const value = useContext(CartContext);
    const { cartProducts, getTotalPrice, removeItem } = value;

    return (
        <div>

            <div className="" style={{ width: "500px" }}>
                {
                    cartProducts.map((product) => (
                        <div >
                            {/* <p>{product.name}</p>
                            <p>Precio unitario: ${product.price}</p>
                            <p>Cantidad: {product.quantity}</p>
                            <p>Precio por cantidad: ${product.quantityPrice}</p>
                            <Button className="removeProductButton" onClick={() => removeItem(product.id)}><FontAwesomeIcon className="fa-light" icon={faTrash}></FontAwesomeIcon></Button> */}

                            <Card className="m-4">
                                <Card.Body className="cartProductDiv" >
                                    <Card.Text><img className="imgCart" src={product.imgProduct} alt={product.name}></img></Card.Text>
                                    <Card.Text><div>{product.name}</div></Card.Text>
                                    <Card.Text><div>${product.price}</div></Card.Text>
                                    <Card.Text><div>${product.quantityPrice}</div></Card.Text>
                                    <Card.Text> <Button className="removeProductButton" onClick={() => removeItem(product.id)}><FontAwesomeIcon className="fa-light" icon={faTrash}></FontAwesomeIcon></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>

            <Card className="totalPrice h4">Precio total: ${getTotalPrice()} </Card>

        </div>
    )
}