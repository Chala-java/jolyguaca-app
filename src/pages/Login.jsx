import { useState } from "react";
import alertaRedireccion, { alertaGenerica } from "../helper/Funciones";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [getNombre, setNombre] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  function iniciarSesion(user, password) {
    if (user === "admin" && password === "123456") {
      alertaRedireccion(() => {
        window.location.href = "/admin"; // ← recarga completa
      }, "Bienvenido", "Será redireccionado al panel de administrador", "success");
    } else {
      alertaGenerica("Error", "Usuario y/o contraseña incorrecto", "error");
    }
  }

  return (
    <form>
      <input
        placeholder="Nombre"
        type="text"
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Contraseña"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => iniciarSesion(getNombre, getPassword)}
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Login;
