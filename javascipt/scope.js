// Scope

// scope con var
var musica = "en var";

if(musica) {
    var musica = "sigo siendo var"; // se comporta como una variable global
    console.log(musica);

};
console.log(musica);

// scope con let
let musica2 = "soy let";

if(musica2) {
    let musica2 = "ya no soy let"; // esto esta instanciado dentro del la condicion
    console.log(musica2);

};
console.log(musica2);