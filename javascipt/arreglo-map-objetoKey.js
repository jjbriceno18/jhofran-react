// Arreglo, map y Object.key

const carrito = ['Producto1', 'Producto2', 'Producto3'];

console.log(carrito)

const contenedorApp = document.querySelector('#app');

let html = '';

carrito.forEach(producto => {
    html += `<li> ${producto} </li>`
});

contenedorApp.innerHTML = html;

// map

carritoMap = carrito.map(producto => {
    return `Producto ${producto}`;
});

console.log(carritoMap);

// Objeto.key
const persona = {
    nombre: 'Jose',
    apellido: 'Hola'
};

console.log(Object.keys(persona));