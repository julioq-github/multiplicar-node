const opts = {
    base: {
        demand: true,
        alias: 'b',
        type: Number
    },
    limite: {
        alias: 'l',
        demand: true,
        default: 29
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}