import "./Card.css";
import "./Form.css"
import { ListaTarjetas } from "../services/dataBase.jsx";
import Form from "./Form";
import { useState } from "react";

const Card = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const manejarClick = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    console.log("cerrarFormulario llamado"); // Verifica si se ejecuta
    setMostrarFormulario(false);
    setProductoSeleccionado(null);
  };

  return (
    <div>
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
            <button
              className="tarjeta__boton"
              onClick={() => manejarClick(tarjeta)}
            >
              Comprar por ${tarjeta.precio}
            </button>
          </div>
        ))}
      </div>

      {mostrarFormulario && (
      
            <Form producto={productoSeleccionado}
            cerrarFormulario={cerrarFormulario}
             />
          

      )}
    </div>
  );
};

export default Card;
