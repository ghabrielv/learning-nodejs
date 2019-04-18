let courses = [
    {
        id: 1,
	    name: "Curso de NodeJS - Nivel introducción",
	    duration: 15,
	    price: 60000
    },
    {
        id: 2,
        name: "Curso de NodeJS - Nivel intermedio",
	    duration: 30,
	    price: 120000
    },
    {
        id: 3,
	    name: "Curso de NodeJS - Nivel avanzado",
	    duration: 45,
	    price: 180000
    },
    {
        id: 4,
	    name: "Curso de NodeJS - De cero a experto",
	    duration: 90,
	    price: 300000
    }
];

let getCourse = (course) => {
	return '#' + course.id + ' ' + course.name + ' tiene una duracion de ' + course.duration + ' horas y su precio es de ' + course.price + ' pesos.';
}

module.exports = {
	courses,
	getCourse
};