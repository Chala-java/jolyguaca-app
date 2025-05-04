import Card from "../components/Card";
import Encabezado from "../components/Encabezado";
import Portada from "../components/Portada";

const Home = () =>{
    return(
        <div className="cuerpo">
            <Encabezado/>
            <div className="cuerpo-producto">
                <Portada/>
            </div>
            <div>
            <Card />
            </div>
        </div>
    )
}

export default Home;