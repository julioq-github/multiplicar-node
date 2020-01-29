//requireds
const fs = require('fs');
const colors = require('colors');

//necesito listar las tablas con su respetivo limite y que me visualice en consola
let listarTabla = (base, limite = 100) => {

    console.log('================'.green);
    console.log(`Tabla de multiplicar ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite = 100) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base} al -${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base} al -${limite}.txt`)

            // console.log(`el archivo tabla-${base} ha sido creado`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}