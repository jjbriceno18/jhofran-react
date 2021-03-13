// destructuring de objeto:
// osea extraer valores de un objeto

const aprendiendoJS = {
    versiones: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['react', 'vue.js', 'angular']
};

let {versiones, frameworks} = aprendiendoJS;

console.log(versiones);
console.log(frameworks);