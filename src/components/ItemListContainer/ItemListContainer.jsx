import '../ItemListContainer/ItemListContainerStyles/ItemListContainerStyles.css';

import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

// import { productsDataBase } from '../dataBase/dataBase';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useParams } from 'react-router-dom';



export const ItemListContainer = ({ }) => {


    const { categoryId } = useParams();

    // const obtainProducts = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(productsDataBase)
    //         }, 1000)
    //     })
    // };

    const [productList, setProductList] = useState([]);

    const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     obtainProducts()
    //         .then((productList) => {
    //             if (categoryId) {
    //                 const productsFiltered = productList.filter(elm => elm.category === categoryId)
    //                 setProductList(productsFiltered);
    //                 setLoading(false);
    //             }
    //             else {
    //                 setProductList(productList);
    //                 setLoading(false);
    //             }
    //         })
    //         .catch((error) => console.log(error))
    // }, [categoryId]);


    useEffect(() => {
        if (categoryId) {
            const getData = async () => {
                const queryRef = query(collection(db, "items"), where("category", "==", categoryId));
                const response = await getDocs(queryRef);
                const documents = response.docs;
                const results = documents.map(element => {
                    return ({
                        ...element.data(),
                        id: element.id
                    })
                });
                setProductList(results);
                setLoading(false);
            }
            getData();
        }
        else {
            const getData = async () => {
                const queryRef = collection(db, "items");
                const response = await getDocs(queryRef);
                const documents = response.docs;
                const results = documents.map(element => {
                    return ({
                        ...element.data(),
                        id: element.id
                    })
                });
                setProductList(results);
                setLoading(false);
            }
            getData();

        }



    }, [])


    return (
        <div className={loading ? 'itemListLoader' : 'itemListContainerDiv'}>
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
                    <ItemList items={productList} />
            }
        </div>
    )
};


