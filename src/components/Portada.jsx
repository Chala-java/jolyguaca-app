import './Portada.css';

const Portada = () => {
  return (
    <section className="portada">
      <div className="portada__info">
        <h2 className="portada__titulo">
        🥑 ¡El sabor auténtico del guacamole recién hecho! 🥑
        </h2>
        <p className="portada__subtitulo">
        Directo del corazón del campo a tu mesa, sin trucos ni conservantes.
        Siente la frescura real en cada bocado.
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
