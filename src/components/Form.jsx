import {agregarPedido} from '../services/dataBase'
import './Form.css';
import { useState } from "react";


const Form = ({ producto, cerrarFormulario }) => {
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
    }

    agregarPedido(nuevaCompra);
    cerrarFormulario();
  }

  const Total= Number(getCantidad)* Number(producto.precio)

 return(
  <section className='formulario'>
    <div className='formulario-contenido'>
    <button className="cerrar-modal" onClick={() => {
  console.log("Botón cerrar presionado"); // Verifica si el botón funciona
  cerrarFormulario();
}}>
  X
</button>

    <form onSubmit={enviarDatos} action="formulario" >

      <h2>Compra de: {producto.titulo}</h2>
      <p>Precio: ${producto.precio}</p>

      <input className='casillas' onChange={(e) =>setNombre(e.target.value)} type="text" placeholder='ingresa tu nombre' required value={getNombre}/>
      <input className='casillas' onChange={(e) =>setEmail(e.target.value)} type="text" placeholder='ingresa tu email' value={getEmail}/>
      <input className='casillas' onChange={(e) =>setTelefono(e.target.value)} type="text" placeholder='ingresa tu telefono' value={getTelefono}/>
      <input className='casillas' onChange={(e) =>setDireccion(e.target.value)} type="text" placeholder='ingresa tu direccion' value={getDireccion}/>
      <input className='casillas' onChange={(e) =>setCantidad(e.target.value)} type="number" placeholder='cantidad de productos' value={getCantidad}/>
      <input className='casillas' onChange={(e) =>setComentario(e.target.value)} type="text" placeholder='Comentario' value={getComentario}/>
      <button type='submit' className='formulario-boton'>Hacer pedido</button>
      <h2>$ {Total} COPP </h2>
    </form>
    </div>
  </section>
 )}

export default Form;
