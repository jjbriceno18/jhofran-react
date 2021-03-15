const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // pasar la cantidad a la apier

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve( JSON.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText) );
        };
    };

    // on error
    xhr.onerror = error => reject(error);

    // send
    xhr.send();
});

descargarUsuarios(10)
    .then(
        mienbros => imprimirHtml(mienbros),
        error => cosole.error(
            new Error('Hubo un error: ' + error)
        )
    );

const imprimirHtml = usuarios => {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen:
                        <img src="${usuario.picture.medium}"/>
            </li>
        `
    });
    
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
};
