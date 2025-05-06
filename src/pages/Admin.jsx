import './Admin.css'
import CardPedido from "../components/CardPedido";
import { obtenerPedidos } from "../services/dataBase"

const Admin = () => {
    const pedidos = obtenerPedidos(); 
  
    return (
      <section>
        <header>
        </header>
      <div className="admin">
        {pedidos.map((pedido, index) => (
          <CardPedido key={index} pedido={pedido}/>
        ))}
      </div>

      </section>
    );
  };
  
  export default Admin;