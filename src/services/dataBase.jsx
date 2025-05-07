export const ListaTarjetas = [ 
    {
        imagen: '/product-guacamole-restaurant-style-minis.png',
        titulo: 'Guacamole Restaurante',
        descripcion: 'Estilo restaurante en presentación mini, perfecto para compartir.',
        precio: 150,
    },
    {
        imagen: 'public/product-minis-cups-guacamole-spicy.png',
        titulo: 'Guacamole Chunky',
        descripcion: 'Con trozos grandes de aguacate y verduras frescas.',
        precio: 180,
    },
    {
        imagen: 'public/product-minis-cups-guacamole-organic.png',
        titulo: 'Guacamole Minis',
        descripcion: 'Porciones individuales ideales para llevar.',
        precio: 165,
    },
    {
        imagen: 'public/product-guaca-verde-medium.png',
        titulo: 'Guacamole Premium',
        descripcion: 'Receta especial estilo restaurante, textura cremosa.',
        precio: 190,
    },
    {
        imagen: 'public/product-guaca.jpg',
        titulo: 'Guacamole Texturizado',
        descripcion: 'Extra chunky con trozos grandes y especias selectas.',
        precio: 175,
    },
    {
        imagen: '/product-guacamole-minis.png',
        titulo: 'Mini Pack Guacamole',
        descripcion: 'Pack de 3 unidades en formato individual.',
        precio: 200,
    }
]
   
export const agregarPedido = (pedido) => {
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
};

export const obtenerPedidos = () => {
    const pedidos = localStorage.getItem("pedidos");
    return pedidos ? JSON.parse(pedidos) : [];
};

export default ListaTarjetas;
