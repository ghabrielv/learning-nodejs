const hbs = require('hbs');

hbs.registerHelper('getAverage', (value1, value2, value3) => {
    return (value1 + value2 + value3) / 3;
});