import '../ItemListContainer/ItemListContainer.css';
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemListContainer = ({ title }) => {
    return (
        <div>
            {title}
            <ItemCount />
        </div>
    )
};