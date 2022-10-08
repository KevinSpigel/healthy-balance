
import '../NavBar/NavBarStyles/NavBarStyles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


export function NavBar() {
    return (
        <div className="headerDiv">

            <div className="imgLogo">
                <Link to="/"><img src={Logo} alt="Logo" width={150} /></Link>
            </div>

            <div className="itemsDiv">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto grid gap-4 ">
                                <Nav.Link className="ms-5" ><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link ><NavLink className={({ isActive }) => isActive === true ? 'activeClass' : 'inactiveClass'} to="/category/Hamburguesas">Hamburguesas</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={({ isActive }) => isActive === true ? 'activeClass' : 'inactiveClass'} to="/category/Congelados">Congelados</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={({ isActive }) => isActive === true ? 'activeClass' : 'inactiveClass'} to="/category/QuienesSomos">¿Quiénes Somos?</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={({ isActive }) => isActive === true ? 'activeClass' : 'inactiveClass'} to="/category/TipsSaludables">Tips Saludables</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </div>

            <div className="cartDiv"><CartWidget /></div>
        </div>
    );
};

