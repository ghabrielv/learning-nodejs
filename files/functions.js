const fs = require('fs');
var listStudents = [];

const create = (s) => {
    list();
    let student = {
        name: s.name,
        mathematics: s.mathematics,
        english: s.english,
        programming: s.programming
    }
    let duplicate = listStudents.find(name => name.name == s.name);
    if (!duplicate) {
        listStudents.push(student);
        console.log(listStudents);
        save();
    } else {
        console.log('Ya existe otro estudiante con ese nombre.');
    }    
};

const list = () => {
    try {
        listStudents = JSON.parse(fs.readFileSync('files/list.json'));
    } catch (err) {
        listStudents = [];
    } 
};

const save = () => {
    let data = JSON.stringify(listStudents);
    fs.writeFile('files/list.json', data, (err) => {
        if (err) throw (err);
        console.log('File created');
    })
};

const views = () => {
    list();
    console.log('Notas de los estudiantes: ');
    listStudents.forEach(student => {
        console.log(student.name);
        console.log('  Matematicas: ' + student.mathematics);
        console.log('  Ingles: ' + student.english);
        console.log('  Programacion: ' + student.programming);
    });
};

const view = (name) => {
    list();
    let student = listStudents.find(search => search.name == name);
    if (student) {
        console.log(student.name);
        console.log('  Matematicas: ' + student.mathematics);
        console.log('  Ingles: ' + student.english);
        console.log('  Programacion: ' + student.programming);
    } else {
        console.log('No existe el estudiante ' + name);
    }
};

const mathematics = () => {
    list();
    let students = listStudents.filter(mat => mat.mathematics >= 3);
    if (students.length == 0) {
        console.log('Ningun estudiante ha aprobado matematicas.');
    } else {
        students.forEach(student => {
            console.log(student.name);
            console.log('  Matematicas: ' + student.mathematics);
        });
    }
};

const average = (name) => {
    list();
    let student = listStudents.find(search => search.name == name);
    let average = 0;
    if (student) {
        average = (student.mathematics + student.english + student.programming) / 3;
    } else {
        console.log('No existe el estudiante ' + name);
    }
    return average;
};

const listAverage = () => {
    list();
    let students = listStudents.filter(avg => ((avg.mathematics + avg.english + avg.programming) / 3) > 3);
    if (students.length == 0) {
        console.log('Ningun estudiante tiene promedio por encima de 3.');
    } else {
        students.forEach(student => {
            console.log(student.name);
            console.log('  Promedio: ' + average(student.name));
        });
    }
};

const update = (name, asignature, calificate) => {
    list();
    let student = listStudents.find(search => search.name == name);
    if (student) {
        student[asignature] = calificate;
        save();
    } else {
        console.log('No existe el estudiante ' + name);
    }
};

const remove = (name) => {
    list();
    let students = listStudents.filter(x => x.name != name);
    if (students.length == listStudents.length) {
        console.log('Ningun estudiante tiene el nombre indicado.');
    } else {
        listStudents = students;
        save();
    }
};

module.exports = {
    create,
    views,
    view,
    mathematics,
    average,
    listAverage,
    update,
    remove
}