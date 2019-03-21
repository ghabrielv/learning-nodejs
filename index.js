const express = require('express');
const app = express();
const { courses, getCourse } = require('./data');
const options = {
	id: {
        demand: true,
		alias: 'i'
	},
	nombre: {
        demand: true,
		alias: 'n'
    },
    cedula: {
        demand: true,
		alias: 'c'
	}
}
const argv = require('yargs')
    .command('inscribir', 'Inscribirse en un curso', options)
    .argv;

var response = '';

if (argv.i == undefined) {
    response += 'Cursos disponibles:' + '<br/>';
    for (let index = 0; index < courses.length; index++) {
        (function(index){
            setTimeout(function(){
                response += getCourse(courses[index]) + '<br/>';
            }, 2000 * (index + 1));
        })(index);
    }
} else {
    let course = courses.find(course => course.id == argv.id);
    if (course == undefined) {
        response += 'El curso seleccionado no existe.' + '<br/>';
    } else {
        response += 'El curso seleccionado para inscribirse es:' + '<br/>';
        response += getCourse(course) + '<br/>';

        let student = {
            nombre: argv.n,
            cedula: argv.c
        };

        let saveRegister = (course, student) => {
            response += "El estudiante " + student.nombre + " con cedula " + student.cedula + ' se ha inscrito en ' + getCourse(course); + "\n";
        }
        saveRegister(course, student);
    }
}

app.get('/', function(req, res) {
    res.send(response);
});

app.listen(3000);