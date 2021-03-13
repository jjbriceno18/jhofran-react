// Spead Operator

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let framework = ['React', 'Laravel', 'Django'];

// Unir los arreglo en 1 solo

let combinacion = [...lenguajes, ...framework];

console.log(combinacion);

////////////////////////////////////////////////////////////////

let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);

////////////////////////////////////////////////////////////////

const suma = (a,b,c) => console.log(a+b+c);

const numero = [1,2,3];

suma(...numero);