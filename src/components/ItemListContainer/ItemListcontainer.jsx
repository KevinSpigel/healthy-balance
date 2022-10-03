import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react';
import { CardProduct } from '../CardProduct/CardProduct';



export const ItemListContainer = ({ title }) => {

    const products = [
        { id: 1, name: "Hamburguesa Lentejas", imgProduct: "", description: "Lentejas", price: "", stock: 10 },
        { id: 2, name: "Hamburguesa Garbanzos", imgProduct: "", description: "Garbanzos", price: "", stock: 20 },
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
            .then((productList) => setProductList(productList))
            .catch((error) => { console.log(error) })
    }, []);

    const [productList, setProductList] = useState([]);


    return (
        <div>
            <div>{title}</div>

            {
                productList.map(element => {
                    return (
                        <CardProduct key={element.id} name={element.name} imgProduct={element.imgProduct} description={element.description} price={element.price} stock={element.stock} />
                    )
                })
            }
        </div>
    )
};