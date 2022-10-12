import '../ItemDetail/ItemDetailStyles/ItemDetailStyles.css';

import { ItemCount } from '../ItemCount/ItemCount';

import Card from 'react-bootstrap/Card';
import { useState } from 'react';



export const ItemDetail = ({ item }) => {

    const [totalCart, setTotalCart] = useState();

    const addToCart = (productsToCart) => {
        setTotalCart(productsToCart);
    }

    //I'm not showing the value of this function.



    return (
        <div>
            <div className="detailDiv">

                <Card className="cardDiv">

                    <Card.Body >
                        <Card.Title>Descripción del producto</Card.Title>

                        <Card.Text>
                            {item.description}
                        </Card.Text>


                    </Card.Body>
                </Card>

                <Card className="cardDiv">
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
