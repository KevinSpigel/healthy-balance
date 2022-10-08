import '../ItemListContainer/ItemListContainerStyles/ItemListContainerStyles.css';

import { productsDataBase } from '../dataBase/dataBase';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { Link } from 'react-router-dom'; // el componente Link reemplazará las etiquetas a




export const ItemListContainer = ({ title }) => {


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
                setProductList(productList);
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }, []);

    const [productList, setProductList] = useState([]);

    const [loading, setLoading] = useState(true);





    return (
        <div>
            <div>{title}</div>
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
                    <ItemList items={productList} />
            }
        </div>
    )
};


