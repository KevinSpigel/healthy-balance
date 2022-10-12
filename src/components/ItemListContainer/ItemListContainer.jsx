import '../ItemListContainer/ItemListContainerStyles/ItemListContainerStyles.css';

import { productsDataBase } from '../dataBase/dataBase';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useParams } from 'react-router-dom';



export const ItemListContainer = ({ }) => {


    const { categoryId } = useParams();

    const obtainProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsDataBase)
            }, 2000)
        })
    };

    const [productList, setProductList] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        obtainProducts()
            .then((productList) => {
                if (categoryId) {
                    const productsFiltered = productList.filter(elm => elm.category === categoryId)
                    setProductList(productsFiltered);
                    setLoading(false);
                }
                else {
                    setProductList(productList);
                    setLoading(false);
                }
            })
            .catch((error) => console.log(error))
    }, [categoryId]);


    return (
        <div className="itemListContainerDiv">
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

