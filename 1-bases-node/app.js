let fs = require('fs');

console.clear();
console.log("==============================");
console.log("Tabla de Multiplicar");
console.log("==============================");

let salida = '';
let multiplo = '';

for(let z = 1; z <= 10; z++) {

    multiplo = z;

        for(let i = 0; i <= 10; i++) {
            salida = `${multiplo} x ${i} = ${multiplo * i}`; 
            console.log(salida);
        

        fs.writeFile( `/log/tabla-${multiplo}.txt`, salida, (err) => {
            if(err) throw err;
            console.log("Documento Creado!");
        });
    }
}


