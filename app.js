/**
 * tabla multiplicar
 */
//requireds
// const fs = require('fs');
// const fs = require('express'); //
// const fs = require('./fs'); //

//cualquier requier va en las primeras lineas
//los .command son metodos que se van creando al principio y cada vez que se necesite crear un metodo se hace con el .command
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.rainbow(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}

// crearArchivo(base)
//             .then(archivo => console.log(`Archivo creado: ${archivo}`))
//             .catch(e => console.log(e));


// let argv2 = process.argv;

// console.log('Base',argv.base);


// console.log(argv2);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`el archivo tabla-${base} ha sido creado`);
// });

// crearArchivos(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`));