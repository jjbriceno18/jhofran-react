// Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout( () => {
        let descuento = true;

        if(descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se aplico el descuenta');
        };
    }, 3000);
});

aplicarDescuento.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
});