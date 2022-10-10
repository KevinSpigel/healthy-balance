import '../ItemList/ItemListStyles/ItemListStyles.css';

import { Item } from '../Item/Item';



export const ItemList = ({ items }) => {

    return (

        <div className="productResponsive">
            <div className="productsContainer">
                {
                    items.map(element => (
                        <Item key={element.id} item={element} />
                    ))
                }
            </div>
        </div>
    )
};




