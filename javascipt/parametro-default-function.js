// parametros por default en function

const actividad = function ( nombre = 'Jhofran', actividad = 'Leer' ) {
    console.log(`Nombre: ${nombre}, actividad: ${actividad}`);
};

actividad('jose', 'escribe');
actividad();