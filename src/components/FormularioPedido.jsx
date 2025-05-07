import { AlertaPedido } from '../helper/Funciones';
import {agregarPedido} from '../services/dataBase'
import './FormularioPedido.css';
import { useState } from "react";


const FormularioPedido = ({ producto, cerrarFormulario }) => {
  const [getNombre, setNombre] = useState("");
  const [getEmail, setEmail] = useState("")
  const [getTelefono, setTelefono] = useState("")
  const [getCantidad, setCantidad] = useState("");
  const [getComentario, setComentario] = useState("");
  const [getDireccion, setDireccion] = useState("");


  const enviarDatos = (e) => {
    e.preventDefault();

    const nuevaCompra = {
      nombre: getNombre,
      email: getEmail,
      telefono: getTelefono,
      cantidad: getCantidad,
      comentario: getComentario,
      direccion: getDireccion,
      producto: producto.titulo,
      precio:producto.precio,
      estado:"Pendiente"
    }

    agregarPedido(nuevaCompra);
    AlertaPedido();
    cerrarFormulario();
  }

  const Total= Number(getCantidad)* Number(producto.precio)

 return(
  <section className="formulario">
    <div className="formulario__contenedor">
      <button className="formulario__cerrar" onClick={cerrarFormulario}>
        X
      </button>
      <form onSubmit={enviarDatos}>
        <h2>Compra de: {producto.titulo}</h2>
        <p>Precio: ${producto.precio}</p>
        <input 
          className="formulario__campo"
          onChange={(e) => setNombre(e.target.value)} 
          type="text" 
          placeholder='Ingresa tu nombre' 
          required 
          value={getNombre}
        />
        <input 
          className="formulario__campo"
          onChange={(e) =>setEmail(e.target.value)} 
          type="text" 
          placeholder='ingresa tu email' 
          value={getEmail}
        />
        <input 
          className="formulario__campo"
          onChange={(e) =>setTelefono(e.target.value)} 
          type="text" 
          placeholder='ingresa tu telefono' 
          value={getTelefono}
        />
        <input 
          className="formulario__campo"
          onChange={(e) =>setDireccion(e.target.value)} 
          type="text" 
          placeholder='ingresa tu direccion' 
          value={getDireccion}
        />
        <input 
          className="formulario__campo"
          onChange={(e) =>setCantidad(e.target.value)} 
          type="number" 
          placeholder='cantidad de productos' 
          value={getCantidad}
        />
        <input 
          className="formulario__campo"
          onChange={(e) =>setComentario(e.target.value)} 
          type="text" 
          placeholder='Comentario' 
          value={getComentario}
        />
        <h2>Total: $ {Total} COPP</h2>
        <button type="submit" className="formulario__boton">
          Hacer pedido
        </button>
      </form>
    </div>
  </section>
 )}

export default FormularioPedido;
