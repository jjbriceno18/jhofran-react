// template strings

// concatenar javascript
const nombre = "Jhofran";
let trabajo = "Desarrollador";

console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
console.log(`Nombre: ${nombre}, Trabajo:  ${trabajo}`);

// concatenar multiple lineas javascript
const contenedorApp = document.querySelector("#app");
let html = '<ul>' +
                '<li> Nombre' + nombre + '</li>' +
                '<li> Trabajo' + trabajo + '</li>'
            '</ul>';

html = `
    <ul>
        <li> Nombre: ${nombre} </li>
        <li> Trabajo: ${trabajo} </li>
    </ul>
`

contenedorApp.innerHTML = html;