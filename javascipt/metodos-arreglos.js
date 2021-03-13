// Metodos de los arreglos

const personas = [
    {nombre: 'Juan', edad: 21, aprendiendo: 'JavaScript'},
    {nombre: 'Miguel', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Anna', edad: 23, aprendiendo: 'Java'},
    {nombre: 'Jose', edad: 39, aprendiendo: 'PHP'},
    {nombre: 'Julia', edad: 32, aprendiendo: 'Ruby'},
]

console.log(personas);

// filtrar los mayores de 28

const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

console.log(mayores);

// que esta aprendiendo Juan y cual es su edad de

const juan = personas.find(persona => {
    return persona.nombre === 'Juan';
});

console.log(`Juan esta aprendiendo ${juan.aprendiendo} y tiene ${juan.edad} años`);

// Sacar el total de las edades
let total = personas.reduce((totalEdad, persona) => {
    return totalEdad + persona.edad;
}, 0);

console.log(total);
// promedio usando length
console.log(total / personas.length);