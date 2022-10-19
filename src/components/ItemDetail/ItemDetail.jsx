import '../ItemDetail/ItemDetailStyles/ItemDetailStyles.css';

import { ItemCount } from '../ItemCount/ItemCount';

import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



export const ItemDetail = ({ item }) => {

    const {addProductToCart} = useContext(CartContext);

    const addToCart = (quantity) => {
        addProductToCart(item, quantity)
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
                        <Card.Title className="titleDiv">{item.name} - ${item.price}</Card.Title>
                        <Card.Text>
                            <ItemCount onAdd={addToCart} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
};
