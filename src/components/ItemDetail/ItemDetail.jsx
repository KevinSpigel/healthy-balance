import '../ItemDetail/ItemDetailStyles/ItemDetailStyles.css';

import { ItemCount } from '../ItemCount/ItemCount';

import Card from 'react-bootstrap/Card';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';



export const ItemDetail = ({ item }) => {

    const {addProductToCart} = useContext(CartContext);

    const [totalCart, setTotalCart] = useState(1);

    const addToCart = (productsToCart) => {
        setTotalCart(productsToCart);
        addProductToCart({quantity:totalCart})
    }



    return (
        <div>
            <div className="detailDiv">

                <Card className="cardDescriptionDiv">

                    <Card.Body >
                        <Card.Title>Descripción</Card.Title>

                        <Card.Text>
                            {item.description}
                        </Card.Text>


                    </Card.Body>
                </Card>

                <Card className="cardDetailDiv">
                    <Card.Img className="imgProducts" src={item.imgProduct} alt={item.name} />
                    <Card.Body >
                        <Card.Title>{item.name} - ${item.price}</Card.Title>
                        <Card.Text>
                            <ItemCount onAdd={addToCart} />

                            {


                                // Here I have to put a condition. In case ItemCount is >=1 show 2 buttons. One to continue shopping and the other one to go to checkout


                            }

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
};
