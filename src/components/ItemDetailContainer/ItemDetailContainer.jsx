import '../ItemDetailContainer/ItemDetailContainerStyles/ItemDetailContainerStyles.css';

// import { productsDataBase } from '../dataBase/dataBase';

import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    // const obtainProducts = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(productsDataBase)
    //         }, 1000)
    //     })
    // };

    // useEffect(() => {
    //     obtainProducts()
    //         .then((productList) => {

    //             const product = productList.find(element => element.id === parseInt(id));
    //             setItem(product);
    //             setLoading(false)
    //         })
    //         .catch((error) => console.log(error))
    // }, [id])

    useEffect(() => {
        const getData = async () => {
            const queryRefDetail = doc(collection(db, "items", id));
            const response = await getDoc(queryRefDetail);
            const results = {
                ...response.data(),
                id: response.id
            }
            setItem(results);
            setLoading(false);
        }
        getData();
    }, [])

    return (
        <div className={loading ? 'itemDetailLoader' : 'itemDetailContainerDiv'}>
            {
                loading ?
                    <div className="loaderContainer">
                        <Button className="loadingDiv" variant="primary" disabled>
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
