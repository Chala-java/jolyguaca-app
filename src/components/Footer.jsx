import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>JolyGuacamoly</h3>
                    <p>Guacamole fresco y natural</p>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: info@jolyguacamoly.com</p>
                    <p>Tel: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 JolyGuacamoly. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;