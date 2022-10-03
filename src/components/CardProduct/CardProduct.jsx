import '../CardProduct/CardProduct.css';
import { ItemCount } from '../ItemCount/ItemCount';



export const CardProduct = ({name,imgProduct,description, price, stock}) => {

    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{imgProduct}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{stock}</p>
            </div>
            <div>
                <ItemCount />
            </div>
        </div>
    )
}