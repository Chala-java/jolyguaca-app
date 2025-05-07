import { useNavigate } from "react-router-dom";
import "./EncabezadoAdmin.css";
import alertaRedireccion from "../helper/Funciones";

const EncabezadoAdmin = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token")
    alertaRedireccion(navigate,"Saliendo", "Estamos cerrando su sesión", "info", "/");
  };

  return (
    <section className="cabecera-admin">
      <nav className="cabecera-admin__nav">
        <div className="cabecera-admin__logo">
          <div className="cabecera-admin__texto">Joly<span>Guacamoly</span></div>
        </div>
        <div className="cabecera-admin__menu">
          <span className="cabecera-admin__usuario">Admin</span>
          <button className="cabecera-admin__boton" onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </div>
      </nav>
    </section>
  );
};

export default EncabezadoAdmin;