import '../ItemDetail/ItemDetailStyles/ItemDetailStyles.css';

export const ItemDetail = ({ item }) => {

    return (
        <div>
            
            <h4>{item.name}</h4>

            <div>
                <img src={item.imgProduct} alt={item.name} />
            </div>

            <div>

                <h5>${item.price}</h5>
            </div>
        </div>

    )
};