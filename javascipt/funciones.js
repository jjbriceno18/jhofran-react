// crear funciones

// function declaration
function saludar( nombre ) {

    console.log(`Bienvenido: ${nombre}`);
};
saludar('Jhofran');

// function expression
const cliente = function saludarCliente( nombreCliente ) {

    console.log(`Bienvenido: ${nombreCliente}`);
};
cliente('Jose');