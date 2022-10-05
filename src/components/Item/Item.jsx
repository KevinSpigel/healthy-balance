import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({ item }) => {

    return (
        <div>
            <img src={item.imgProduct} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <ItemCount />
        </div>
    )
};

