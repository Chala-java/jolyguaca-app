import './CardPedido.css'

const CardPedido = ({ pedido }) => {
  return (
    <div className="pedido-card">
        <h3>{pedido.nombre}</h3>
        <p>Producto: {pedido.producto}</p>
        <p>Cantidad: {pedido.cantidad}</p>
        <p>Precio: ${pedido.precio}</p>
        <p>Total: ${pedido.precio * pedido.cantidad}</p>
        <p>Dirección: {pedido.direccion}</p>
      </div>
  );
};

export default CardPedido;
