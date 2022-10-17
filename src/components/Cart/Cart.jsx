import '../Cart/CartStyles/CartStyles.css';
import {ItemCart} from '../ItemCart/ItemCart';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export const Cart = () => {

    return (
        <div>
<ItemCart />


            {/* {
                loading ?
                    <div>
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
                    <ItemCart />
            } */}
        </div>
    )
}