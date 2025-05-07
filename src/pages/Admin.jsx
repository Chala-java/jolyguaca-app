import { obtenerPedidos } from '../services/dataBase';
import './Admin.css';
import EncabezadoAdmin from '../components/EncabezadoAdmin';
import TarjetaPedido from '../components/TarjetaPedido';

const Admin = () => {
  
  const pedidos = obtenerPedidos() || [];

  return (
    <>
      <EncabezadoAdmin />
      <div className="admin-contenedor">
      <h1>Administración De estado</h1>
        <div className="admin-contenido">
          {pedidos.map((pedido, index) => (
            <TarjetaPedido key={index} pedido={pedido} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;