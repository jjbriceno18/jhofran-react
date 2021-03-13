// object constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
};

// crear nueva tarea
const tarea = new Tarea('Aprender', 'Rapida');

console.log(tarea)

// prototype
Tarea.prototype.mostra = function () {
    return `El nombre ${this.nombre}, es ${this.urgencia}`;
};

console.log(tarea.mostra());