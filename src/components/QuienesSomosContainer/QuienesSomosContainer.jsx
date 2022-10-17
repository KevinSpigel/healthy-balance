import '../QuienesSomosContainer/QuienesSomosContainerStyles/QuienesSomosContainerStyles.css';
import Card from 'react-bootstrap/Card';

import laura from '../../assets/founderImages/laura.png';
import macarena from '../../assets/founderImages/macarena.png';


export const QuienesSomosContainer = () => {
    return (
        <div className="somosContainer">

            <div className="imgFounderDiv">
                <img src={laura} alt="Laura" />
                <img src={macarena} alt="Macarena" />
            </div>

            <Card className="somosDiv">

                <Card.Body >
                    <Card.Text>
                        <p className="presentationDiv">Somos Lau y Maca, madre e hija, Maca es nutricionista, y aporta todos los
                            conocimientos para que sean saludables y cumplan con los parámetros necesarios para su elaboración,
                            conservación y
                            comercialización. Lau es nuestra cheff, quien prueba y aprueba las mejores combinaciones para nuestras
                            hamburguesas.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}