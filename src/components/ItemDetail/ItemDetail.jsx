import '../ItemDetail/ItemDetailStyles/ItemDetailStyles.css';

import { ItemCount } from '../ItemCount/ItemCount';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ItemDetail = ({ item }) => {

    return (
        <div>
            <div className="">
            <Card className="cardDiv">
                <Card.Img src={item.imgProduct} alt={item.name} />
                <Card.Body >
                    <Card.Title>{item.name} - ${item.price}</Card.Title>
                    <Link to={`/item/${item.id}`}><Button variant="primary">Ver detalle</Button></Link>
                </Card.Body>
            </Card>

            <Card className="cardDiv">
                <Card.Img src={item.imgProduct} alt={item.name} />
                <Card.Body >
                    <Card.Title>{item.name} - ${item.price}</Card.Title>
                    <Link to={`/item/${item.id}`}><Button variant="primary">Ver detalle</Button></Link>
                </Card.Body>
            </Card>
            </div>
        </div>

    )
};


{/* <h4>{item.name}</h4>

<div>
    <img src={item.imgProduct} alt={item.name} />
</div>

<div>

    <h5>${item.price}</h5>
</div> */}