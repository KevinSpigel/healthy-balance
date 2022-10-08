import '../Footer/FooterStyles/FooterStyles.css';
import FbIcon from '../../assets/socialNetworksIcon/facebook.png';
import IgIcon from '../../assets/socialNetworksIcon/instagram.png';
import MailIcon from '../../assets/socialNetworksIcon/email.png';
import WpIcon from '../../assets/socialNetworksIcon/whatsapp.png';


export const Footer = () => {
    return (
        <footer className="footerDiv">
            <div className="divIcon">

                <p>Contáctanos</p>

                <a href='mailto:tuequilibriosaludable@gmail.com' target='_blank'><img src={MailIcon} alt="Icono Email" />
                </a>

                <a href='tel:(011)11-3693-3998' target='_blank'><img src={WpIcon} alt="Icono Whatsapp" />
                </a>

                <a href="https://www.facebook.com/hamburguesas.tuequilibriosaludable/" target="_blank"><img
                    src={FbIcon} alt="Facebook icon" /></a>

                <a href="https://www.instagram.com/tu.equilibriosaludable/" target="_blank"><img
                    src={IgIcon} alt="Instagram icon" /></a>
            </div>

            <div className="dropUpHome">
                <div className="dropup">
                    <button href="#home" className="btn dropdown-toggle" ></button>
                </div>
            </div>

            <div className="signatureFooter"> &copy; 2022 - Developed by Kevin Spigel</div>

        </footer>
    );
};