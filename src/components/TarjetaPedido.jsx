import { useState } from "react";
import { alertaGenerica } from "../helper/Funciones";
import "./TarjetaPedido.css";

const TarjetaPedido = ({ pedido }) => {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(pedido.estado);

  const actualizarEstado = () => {
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    const pedidosActualizados = pedidos.map((pedidoActual) => {
      if (pedidoActual.nombre === pedido.nombre) {
        return { ...pedidoActual, estado: estadoSeleccionado };
      }
      return pedidoActual;
    });

    localStorage.setItem("pedidos", JSON.stringify(pedidosActualizados));
    alertaGenerica("Éxito", "Estado actualizado correctamente", "success");
    window.location.reload();
  };

  return (
    <div className="pedido">
      <h3 className="pedido__titulo">{pedido.nombre}</h3>
      <p className="pedido__detalle">Teléfono: {pedido.telefono}</p>
      <p className="pedido__detalle">Producto: {pedido.producto}</p>
      <p className="pedido__detalle">Cantidad: {pedido.cantidad}</p>
      <p className="pedido__detalle">Precio: ${pedido.precio}</p>
      <p className="pedido__detalle">Total: ${pedido.precio * pedido.cantidad}</p>
      <p className="pedido__detalle">Dirección: {pedido.direccion}</p>
      <p className="pedido__detalle">Estado: {pedido.estado}</p>
      <div className="pedido__estado">
        <select
          className="pedido__selector"
          value={estadoSeleccionado}
          onChange={(e) => setEstadoSeleccionado(e.target.value)}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En camino">En camino</option>
          <option value="Entregado">Entregado</option>
        </select>
        <button className="pedido__boton" onClick={actualizarEstado}>
          Guardar Estado
        </button>
      </div>
    </div>
  );
};

export default TarjetaPedido;
