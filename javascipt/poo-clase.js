// Escribir classes

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        return `${this.nombre} tiene una prioridad ${this.prioridad}`
    }
}

let tarea = new Tarea('Aprender JavaScript', 'Alta');

console.log(tarea.mostrar());

// heredar

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
}

let compra = new ComprasPendientes('Jabon', 'Urgente', 4);

console.log(compra.mostrar());