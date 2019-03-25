const { argv } = require('./yargs');
const functions = require('./functions');

let command = argv._[0];

switch (command) {
    case 'create':
        functions.create(argv);    
        break;
    case 'views':
        functions.views();
        break;
    case 'view':
        functions.view(argv.n);
        break;
    case 'mathematics':
        functions.mathematics();
        break;
    case 'average':
        if (argv.name == '') {
            functions.listAverage();
        } else {
            if (functions.average(argv.n) > 0) {
                console.log(argv.n);
                console.log('  Promedio: ' + functions.average(argv.n));
            }
        }
        break;
    case 'update':
        functions.update(argv.name, argv.asignature, argv.calificate);
        break;
    case 'remove':
        functions.remove(argv.n);
        break;
    default:
        console.log('Comando no existe.');
        break;
}