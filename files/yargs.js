const name = {
    demand: true,
    alias: 'n'
};
const mathematics = {
    demand: true,
    alias: 'm'
};
const english = {
    demand: true,
    alias: 'e'
};
const programming = {
    demand: true,
    alias: 'p'
};
const creation = {
    name,
    mathematics,
    english,
    programming
};
const view = {
    name
};
const average = {
    name: {
        alias: 'n',
        default: ''
    }
};
const update = {
    name,
    asignature: {
        demand: true,
        alias: 'a'
    },
    calificate: {
        demand: true,
        alias: 'x'
    }
};
const remove = {
    name
};
const argv = require('yargs')
            .command('create', 'Crear un estudiante', creation)
            .command('views', 'Muestra los estudiantes con sus notas')
            .command('view', 'Muestra un estudiantes con sus notas', view)
            .command('mathematics', 'Muestra los estudiantes que han aprobado matematicas')
            .command('average', 'Muestra el promedio de los estudiantes', average)
            .command('update', 'Actualiza la información de una nota de un estudiante', update)
            .command('remove', 'Elimina un estudiante', remove)
            .argv;

module.exports = {
    argv
};