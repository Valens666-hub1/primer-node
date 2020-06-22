const argv = require('./config/yargs').argv;
// const colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.blue(archivo)))
            .catch(e => console.log(e))
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}