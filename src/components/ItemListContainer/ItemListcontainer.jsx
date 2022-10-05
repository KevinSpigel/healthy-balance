import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';



export const ItemListContainer = ({ title }) => {

    const products = [
        { id: 1, name: "Hamburguesa Lentejas", imgProduct: "", description: "Lentejas", price: "", stock: 10 },
        { id: 2, name: "Hamburguesa Quinoa", imgProduct: "", description: "Quinoa", price: "", stock: 20 },
        { id: 3, name: "Hamburguesa Espinaca", imgProduct: "", description: "Espinaca", price: "", stock: 15 },
    ];

    const obtainProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
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
                loading ? <p> Loading...</p>
                    :
                    <ItemList items={productList} />
            }
        </div>
    )
};


