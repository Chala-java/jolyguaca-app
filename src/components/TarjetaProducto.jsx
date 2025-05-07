import "./TarjetaProducto.css";
import { ListaTarjetas } from "../services/dataBase.jsx";
import FormularioPedido from "./FormularioPedido.jsx";
import { useState } from "react";
import { alertaRedireccion } from "../helper/Funciones.jsx";

const TarjetaProducto = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const manejarClick = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
    setProductoSeleccionado(null);
  };




  return (
      <div className="lista-tarjetas">
        {ListaTarjetas.map((tarjeta, index) => (
          <div className="tarjeta" key={index}>
            <img
              src={tarjeta.imagen}
              alt={tarjeta.titulo}
              className="tarjeta__imagen"
            />
            <h2 className="tarjeta__titulo">{tarjeta.titulo}</h2>
            <p className="tarjeta__descripcion">{tarjeta.descripcion}</p>
            <h2>$ {tarjeta.precio}</h2>
            <button
              className="tarjeta__boton"
              onClick={() => manejarClick(tarjeta)} >

              Comprar
            </button>
          </div>
        ))}

      {mostrarFormulario && (
      
            <FormularioPedido producto={productoSeleccionado}
            cerrarFormulario={cerrarFormulario}
             />
      )}
    </div>
  );
};

export default TarjetaProducto;
