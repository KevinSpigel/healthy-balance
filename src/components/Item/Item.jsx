import '../Item/ItemStyles/ItemStyles.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export const Item = ({ item }) => {

    return (
        <div>
            <h4>{item.name}</h4>
            <img className="imgProducts" src={item.imgProduct} alt={item.name} />
            <p>${item.price}</p>

            <ItemCount />

            <Link to={`/item/${item.id}`}>
                <button>Ver Detalle</button>
            </Link>
        </div>
    )
};

