import '../ItemDetailContainer/ItemDetailContainerStyles/ItemDetailContainerStyles.css';
import { productsDataBase } from '../dataBase/dataBase';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const obtainProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsDataBase)
            }, 2000)
        })
    };

    useEffect(() => {
        obtainProducts()
            .then((productList) => {

                const product = productList.find(element => element.id === parseInt(id));
                setItem(product);
                setLoading(false)
            })
            .catch((error) => console.log(error))
    }, [id])



    return (
        <div>
            {
                loading ?
                    <div>
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    </div>
                    :
                    <ItemDetail item={item} />
            }
        </div>
    )

};
