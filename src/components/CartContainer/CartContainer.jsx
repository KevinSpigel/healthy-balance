import './CartContainerStyles/CartContainerStyles.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartContainer = () => {

    const value = useContext(CartContext);
    const { cartProducts, getTotalPrice, getTotalProducts, removeItem, addProductCart, deleteProductCart, emptyCart } = value;


    if (cartProducts.length === 0) {
        return (
            <div className="cartContainer">
                
                    <Card className="cardCartContainer">
                        <Card.Text>
                            <h1>Lo siento,</h1>
                            <h3>Aún no tienes productos en tu carrito</h3>
                            <Link to="/"><Button className="btn-lg mt-3 mb-3 counterButton">Ver todos los productos</Button></Link>
                        </Card.Text>
                    </Card>
                </div>
            
        )
    }


    return (
        <div className="cartContainer">

            <div style={{ width: "650px" }}>
                {
                    cartProducts.map((product) => (
                        <div>
                            <Card className="borderCard m-4 h5">
                                <Card.Body className="cartProductDiv" >
                                    <Card.Text><img className="imgCart" src={product.imgProduct} alt={product.name}></img></Card.Text>
                                    <Card.Text><div>{product.name}</div></Card.Text>
                                    <Card.Text><div>${product.price}</div></Card.Text>

                                    <div className="counterCart">
                                        <Card.Text> <Button className="btn btn-sm btn-secondary" onClick={() => deleteProductCart(product.id)}>-</Button></Card.Text>
                                        <Card.Text>{product.quantity}</Card.Text>
                                        <Card.Text> <Button className="btn btn-sm btn-secondary" onClick={() => addProductCart(product.id)}>+</Button></Card.Text>
                                    </div>

                                    <Card.Text><div>${product.quantityPrice}</div></Card.Text>
                                    <Card.Text> <Button className="removeProductButton" onClick={() => removeItem(product.id)}><FontAwesomeIcon className="fa-light" icon={faTrash}></FontAwesomeIcon></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>

            <div className="generalCards">
                <div>
                    <Card className="totalPrice h5">Precio total: ${getTotalPrice()} </Card>
                    <Card className="totalPrice h5">Cantidad total: {getTotalProducts()} </Card>
                    <Button className="btn btn-lg btn-success mt-3">Terminar compra</Button>

                </div>
                <Button className="btn btn-sm btn-danger" onClick={emptyCart}>Vaciar carrito</Button>
            </div>

        </div>
    )
}