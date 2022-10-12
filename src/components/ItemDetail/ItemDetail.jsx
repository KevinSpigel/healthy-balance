import '../ItemDetail/ItemDetailStyles/ItemDetailStyles.css';

import { ItemCount } from '../ItemCount/ItemCount';

import Card from 'react-bootstrap/Card';



export const ItemDetail = ({ item }) => {

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
                            <ItemCount />

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
};
