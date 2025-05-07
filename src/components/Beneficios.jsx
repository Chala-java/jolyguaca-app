import './Beneficios.css'
const Beneficios = () => {
  const listaBeneficios= [
    {
      titulo: "¡Guacamole Fresquito, Directo del Campo!",
      descripcion: "Nuestro guacamole está hecho con aguacates recién cosechados, ¡molido al momento para que disfrutes de un sabor auténtico y sin conservantes!",
      icono: "🥑"
    },
    {
      titulo: "¡El Sabor de Colombia en tu Mesa!",
      descripcion: "Preparamos tu guacamole con cariño y lo enviamos a cada rincón del país. ¡Disfruta de JolyGuacamoly donde estés! 🇨🇴",
      icono: "⚡"
    },
    {
      titulo: "¡Directo a Ti, Sin Complicaciones!",
      descripcion: "Compra fácil y rápido, directo de nosotros. Sin vueltas ni costos adicionales. ¡Así de sencillo! 👐",
      icono: "👐"
    },
    {
      titulo: "¡Te Escuchamos de Verdad!",
      descripcion: "¿Tienes alguna duda? ¡Estamos aquí para ayudarte! Contáctanos cuando lo necesites.",
      icono: "📞"
    }
  ];
    return (
      <section className="beneficios">
        <h2 className="beneficios__titulo">¿Por qué elegirnos?</h2>
        <div className="beneficios__contenedor">
          {listaBeneficios.map((item, index) => (
            <div className="beneficio" key={index}>
              <span className="beneficio__icono">{item.icono}</span>
              <h3 className="beneficio__titulo">{item.titulo}</h3>
              <p className="beneficio__descripcion">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Beneficios;
  