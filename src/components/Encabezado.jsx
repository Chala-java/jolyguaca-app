import '../components/Encabezado.css'

const Encabezado = () =>{
    return(
        <section className="encabezado">
            <nav className="encabezado-nav">
                     <img src="public\aguacate-logo.png" alt="" />
                <ul className="encabezado-lista">
                     <li><>Home</></li>
                     <li><>Productos</></li>
                     <li><>Beneficios</></li>
                     <li><>Contactanos</></li>
                </ul>
            </nav>
        </section>
    )
}
export default Encabezado;