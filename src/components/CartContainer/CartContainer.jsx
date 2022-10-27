import './CartContainerStyles/CartContainerStyles.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const CartContainer = () => {

    const value = useContext(CartContext);
    const { cartProducts, getTotalPrice, getTotalProducts, removeItem, addProductCart, deleteProductCart, emptyCart } = value;

    if (cartProducts.length === 0) {
        return (
            <div className="cartContainer">

                <Card className="cardCartContainer">
                    <Card.Text>
                        <h1>Lo sentimos,</h1>
                        <h3>Aún no tienes productos en el carrito.</h3>
                        <Link to="/"><Button className="btn-lg mt-3 mb-3 counterButton">Ver todos los productos</Button></Link>
                    </Card.Text>
                </Card>
            </div>

        )
    }

    const succedOrder = (title, text) => {
        Swal.fire({
            toast: false,
            icon: 'success',
            title: title,
            text: text,
            showConfirmButton: true,
            position: 'center',
            background: 'rgba(16, 169, 5, 0.9)',
        })
    };

    const errorOrder = (title, text) => {
        Swal.fire({
            toast: false,
            icon: 'error',
            title: title,
            text: text,
            showConfirmButton: true,
            position: 'center',
            background: 'rgba(246, 54, 54, 0.9)',
        })
    };

    const sendOrder = (evt) => {
        evt.preventDefault();

        const order = {
            buyer: {
                email: evt.target[0].value,
                customer: evt.target[1].value,
                phone: evt.target[2].value
            },
            items: cartProducts,
            totalPrice: getTotalPrice(),
            date: new Date().toLocaleDateString()
        }
        const queryRefOrders = collection(db, "orders");
        addDoc(queryRefOrders, order)
            .then((response) => {
                succedOrder("Su orden fue realizada con éxito", `El código de su orden es: ${response.id}`);
                setTimeout(() => emptyCart(), 2500)
            }
            )
            .catch((error) => (
                errorOrder("No se ha podido realzar la compra", "Por favor, vuelva a intentarlo.")))
    }


    return (
        <div className="cartContainer">

            <div style={{ width: "650px" }}>
                {
                    cartProducts.map((product) => (
                        <div key={product.id}>
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
                <div className="purchaseContainer">
                    <div>
                        <Card className="totalPrice h5">Cantidad de productos: {getTotalProducts()} </Card>
                        <Card className="totalPrice h1 mb-3">Precio total: ${getTotalPrice()} </Card>
                        <Button className="btn btn-sm btn-danger" onClick={emptyCart}>Vaciar carrito</Button>

                    </div>

                    <Card className="borderCard">
                        <Card.Body className="purchaseDiv">
                            <Form onSubmit={sendOrder}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" required />
                                </Form.Group>

                                <Form.Group className="mb-4" >
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="tel" maxLength="10" placeholder="Teléfono" required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                                    <h4 className="mb-3">Métodos de pago:</h4>

                                    <Form.Check inline name="inlineCheck" type="radio" label="Tarjeta de Débito" defaultChecked />
                                    <Form.Check inline name="inlineCheck" type="radio" label="Tarjeta de Crédito" />
                                    <Form.Check inline name="inlineCheck" type="radio" label="Otros" />

                                </Form.Group>

                                <Form.Text className="text-align-center text-muted">
                                    Por favor, revisar la información de la compra antes de confirmar.
                                </Form.Text>

                                <Button type="submit" className="btn btn-lg btn-success mt-4">Realizar compra</Button>

                            </Form>
                        </Card.Body>
                    </Card>

                </div>
                <div>
                </div>
            </div>
        </div>
    )
}