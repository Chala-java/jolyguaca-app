import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Login from "../pages/Login";

export let enrutador = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
