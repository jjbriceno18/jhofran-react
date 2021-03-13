// metodos o funciones en un objeto

const persona = {
    nombre: 'Jose',
    trabajo: 'Desarrollador',
    edad: 22,
    mostrarInfo() {
        console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad}`);
    }
};

persona.mostrarInfo();