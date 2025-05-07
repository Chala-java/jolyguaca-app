import RutaProtegida from "../components/RutaProtegida";
import Admin from "../pages/Admin";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";

export let enrutador = [
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/admin",
    element: <RutaProtegida proteger={<Admin/>} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
