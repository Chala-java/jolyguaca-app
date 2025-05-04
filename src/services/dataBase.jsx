export const ListaTarjetas = [ 
    {
        imagen: '/public/product-guaca.jpg',
        titulo: 'Guacamole Clásico',
        descripcion: 'El mejor guacamole tradicional, fresco y delicioso.',
        precio: 150,
    },
    {
        imagen: '/public/product-guaca.jpg',
        titulo: 'Guacamole Picante',
        descripcion: 'Con un toque de chile para los amantes del picante.',
        precio: 180,
    },
    {
        imagen: '/public/product-guaca.jpg',
        titulo: 'Guacamole Gourmet',
        descripcion: 'Preparado con ingredientes premium para un sabor único.',
        precio: 200,
    },
    
 ]

 export const ListaCompras = [];

 export const obtenerPedidos = () => {
    const pedidos = localStorage.getItem("pedidos");
    return pedidos ? JSON.parse(pedidos) : [];
  };
  
  export const agregarPedido = (pedido) => {
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  };


 export default ListaTarjetas;
