// -------------------- SNACK 1 ---------------------



// -------------------- SNACK 2 ---------------------

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini ',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },
];


const newCourse = students.map(studentName => studentName.name.toUpperCase());
console.log(newCourse);

const gradesOver70 = students.filter(studentGrade => studentGrade.grades > 70);
console.log(gradesOver70);

