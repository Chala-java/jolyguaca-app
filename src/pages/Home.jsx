import Beneficios from "../components/Beneficios";
import Card from "../components/Card";
import Encabezado from "../components/Encabezado";
import Portada from "../components/Portada";
import './Home.css'

const Home = () =>{
    return(
        <section className="contenedor">
                    <Encabezado/>  
             <div className="cuerpo">
          <div className="cuerpo-portada" id="portada-scroll">
            <Portada/>
          </div>
          <div className="tarjetas" id="tarjetas-scroll">
            <Card />
          </div>
          <div className="beneficios" id="beneficio-scroll">
            <Beneficios/>
          </div>
        </div>
        </section>
       
    )
}

export default Home;