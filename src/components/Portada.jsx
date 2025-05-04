import './Portada.css';

const Portada = () => {
  return (
    <section className="portada">
      <div className="portada__info">
        <h2 className="portada__titulo">
          Guacamole natural. Sin rodeos.
        </h2>
        <p className="portada__subtitulo">
          Directo del campo a tu mesa. Frescura que se siente.
        </p>
        <button className="portada__boton">Ordenar ahora</button>
      </div>
      <div className="portada__imagen-container">
        <img src="/aguacate3d.png" alt="Guacamole fresco" className="portada__imagen" />
        <span className="portada__etiqueta">100% natural 🥑</span>
      </div>
    </section>
  );
};

export default Portada;
