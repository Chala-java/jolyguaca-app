import { useState } from "react";
import alertaRedireccion, { alertaGenerica, GenerarToken } from "../helper/Funciones";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [getNombre, setNombre] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  function iniciarSesion(user, password) {
    if (user === "admin" && password === "123456") {
      let tokenAcceso = GenerarToken();
      localStorage.setItem("token",tokenAcceso)
      alertaRedireccion(() => {
        window.location.href = "/admin"; // ← aqui hace una recarga completa
      }, "Bienvenido", "Será redireccionado al panel de administrador", "success");
    } else {
      alertaGenerica("Error", "Usuario y/o contraseña incorrecto", "error");
    }
  }

  return (
    <div className="login-container">
      <div className="login-overlay"></div>
      <img 
        src="/guacamole-login.avif" 
        alt="Fondo Login" 
        className="login-background"
      />
      <div className="login-form-container">
        <h2>Iniciar Sesión</h2>
        <p>Panel de Administración</p>
        <form className="login-form">
          <div className="form-group">
            <label>Usuario</label>
            <input
              placeholder="Ingrese su nombre de usuario"
              type="text"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Correo</label>
            <input
              placeholder="Ingrese su correo"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              placeholder="Ingrese su contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => iniciarSesion(getNombre, getPassword)}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
