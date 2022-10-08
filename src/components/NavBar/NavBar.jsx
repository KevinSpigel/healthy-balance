
import '../NavBar/NavBarStyles/NavBarStyles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';// el componente Link reemplazará las etiquetas a


export function NavBar() {
    return (
        <div className="headerDiv">

            <div className="imgLogo">
                <img src={Logo} alt="Logo" width={150} />
            </div>

            <div className="itemsDiv">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto grid gap-4 ">
                            <Nav.Link className="ms-5" >Home</Nav.Link>
                            <Nav.Link >Hamburguesas</Nav.Link>
                            <Nav.Link >Congelados</Nav.Link>
                            <Nav.Link >¿Quiénes Somos?</Nav.Link>
                            <Nav.Link >Tips Saludables</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            </div>

            <div className="cartDiv"><CartWidget /></div>
        </div>
    );
};

