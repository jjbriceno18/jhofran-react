import { Fragment, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {


  // crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa React', precio: 50 },
    { id: 2, nombre: 'Camisa Angula', precio: 20 },
    { id: 3, nombre: 'Camisa Vues', precio: 30 },
    { id: 4, nombre: 'Camisa Node', precio: 40 },
  ])

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([])

  let titulo = 'Tienda Virtual'
  // Obtener fecha
  const fecha = new Date().getFullYear()

  return (
    <Fragment>
      <Header
        titulo={titulo}
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
