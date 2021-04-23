import React from 'react'

const Producto = ({producto, carrito, productos, agregarProducto}) => {

    const { nombre, precio, id } = producto

    // agregar producto al carritoMap
    const seleccionarProducto = id => {
        const producto = productos.filter( producto => producto.id === id)
        agregarProducto([
            ...carrito,
            ...producto
        ])
    }

    // eliminar producto del carritoMap
    const eliminarProducto = id => {
        const productos = carrito.filter( producto => producto.id !== id)
        agregarProducto(productos)
    }


    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            { productos
            ?
                (
                    <button
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                    >Comprar</button>
                )
            :
                <button
                    type="button"
                    onClick={ () => eliminarProducto(id) }
                >Eliminar</button>
            }
        </div>
    );
}

export default Producto;