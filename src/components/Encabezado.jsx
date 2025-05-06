import { useNavigate } from "react-router-dom"; 
import "./Encabezado.css";

const Encabezado = () => {
  const navigate = useNavigate();

  return (
    <section className="encabezado">
      <nav className="encabezado-nav">
        <div className="encabezado-logo">
          {/* Logo simple */}
          <img 
            src="/logo-guacamole.png" 
            alt="JolyGuacamoly Logo" 
            className="logo-img"
          />
          <div className="logo-text">Joly<span>Guacamoly</span></div>
        </div>
        
        <ul className="encabezado-lista">
          <li className="encabezado-boton">
            <a href="#portada-scroll">Home</a>
          </li>
          <li className="encabezado-boton">
            <a href="#tarjetas">Productos</a>
          </li>
          <li className="encabezado-boton">
            <a href="#beneficio-scroll">Beneficios</a>
          </li>
          <li className="encabezado-boton">
            <a href="#">Contáctanos</a>
          </li>
          <button onClick={() => navigate("/login")}>
            Iniciar Sesión
          </button>
        </ul>
      </nav>
    </section>
  );
};

export default Encabezado;
