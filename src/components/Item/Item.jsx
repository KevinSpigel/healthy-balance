import '../Item/ItemStyles/ItemStyles.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'; // el componente Link reemplazará las etiquetas a


export const Item = ({ item }) => {

    return (
        <div>
            <img src={item.imgProduct} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <ItemCount />
            <button>Ver Detalle</button>
        </div>
    )
};

