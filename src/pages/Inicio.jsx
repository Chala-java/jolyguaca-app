import Encabezado from '../components/Encabezado';
import Portada from '../components/Portada';
import TarjetaProducto from '../components/TarjetaProducto';
import Beneficios from '../components/Beneficios';
import Footer from '../components/Footer';
import './Inicio.css'

const Inicio = () =>{
    return(
        <section className="contenedor">
                    <Encabezado/>  
             <div className="cuerpo">
          <div className="cuerpo-portada" id="portada-scroll">
            <Portada/>
          </div>
          <div className="tarjetas" id="tarjetas-scroll">
            <h1>Productos</h1>
            <TarjetaProducto />
          </div>
          <div className="beneficios" id="beneficio-scroll">
            <Beneficios/>
          </div>
          <footer className="footer">
            <Footer/>
          </footer>
        </div>
        </section>
       
    )
}

export default Inicio;