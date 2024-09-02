// ! -------------------- SNACK 1 ----------------------

console.log('-----------------  SNACK 1  ------------------');

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];

const table = 'Tavolo Vip';

const guestsList = guests.map((guest, i) => ({ guest, table, place: i + 1 }));

console.log(guestsList);

// ! -------------------- SNACK 2 ----------------------

console.log('-----------------  SNACK 2  ------------------');

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

// Raccolgo tutti i nomi nell'array di oggetti e li stampo in console in maiuscolo
const newCourse = students.map(studentName => studentName.name.toUpperCase());
console.log('Students names', newCourse);

// Filtro tutti gli studenti con la somma dei voti superiore a 70
const gradesOver70 = students.filter(studentGrade => studentGrade.grades > 70);
console.log('Grades Over 70', gradesOver70);

// Controllo se gli studenti con grades over 70 hanno anche un id superiore a 120
const gradesOver70IdOver120 = gradesOver70.filter(studentId => studentId.id > 120);
console.log('Students grades over 70 and id over 120', gradesOver70IdOver120);


// ! -------------------- SNACK 3 ----------------------

console.log('-----------------  SNACK 3  ------------------');

const bicycles = [
    {
        name: 'Bianchi',
        weight: 8,
    },
    {
        name: 'Atala',
        weight: 6,
    },
    {
        name: 'Olmo',
        weight: 9,
    },
    {
        name: 'Cervelo',
        weight: 7,
    }
];

let lightestBike = bicycles[0];

// Prendo il peso di ogni bicicletta
bicycles.forEach((bike) => {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
})

console.log(`La bicicletta più leggere è ${lightestBike.name}, che pesa ${lightestBike.weight}`);



// ! -------------------- SNACK 4 ----------------------

console.log('-----------------  SNACK 4  ------------------');

const footballTeams = [
    {
        name: 'Roma',
        score: 0,
        fails: 0,
    },
    {
        name: 'juventus',
        score: 0,
        fails: 0,
    },
    {
        name: 'Milan',
        score: 0,
        fails: 0,
    },
    {
        name: 'Inter',
        score: 0,
        fails: 0,
    }
];

// Creo funzione per generare numeri casuali
const randomNumbers = (max) => {
    const numbers = Math.floor(Math.random() * max) + 1;
    return numbers;
}

// Do alla key "score" un valore corrispondente al numero casuale
const actualScore = footballTeams.map(teamScore => teamScore.score = randomNumbers(100));

// Do alla key "fails" un valore corrispondente al numero casuale
const actualFails = footballTeams.map(teamFails => teamFails.fails = randomNumbers(15));
console.log(footballTeams);

const teamsAndFails = footballTeams.reduce((result, team) => {
    result += team.name.concat(team.fails)
    return result
}, []);
console.log(teamsAndFails);


// ! -------------------- SNACK 5 ----------------------

console.log('-----------------  SNACK 5  ------------------');

const disneyNames = ['Pippo', 'PLUTO', 'Paperino'];

const formattedNames = disneyNames.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase(1);
})

console.log(formattedNames);


// ! -------------------- SNACK 6 ----------------------

console.log('-----------------  SNACK 6  ------------------');

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'topo', famiglia: 'fasianidi', classe: 'mammiferi' },
    { nome: 'lontra', famiglia: 'fasianidi', classe: 'mammiferi' },
    { nome: 'serpente', famiglia: 'fasianidi', classe: 'rettili' },
    { nome: 'rana', famiglia: 'fasianidi', classe: 'anfibi' },
    { nome: 'elefante', famiglia: 'fasianidi', classe: 'mammiferi' },
    { nome: 'ippopotamo', famiglia: 'fasianidi', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
];

const mammalAnimals = animals.filter((animal) => animal.classe === 'mammiferi')
console.log(mammalAnimals);


// ! -------------------- SNACK 7 ----------------------

console.log('-----------------  SNACK 7  ------------------');

const people = [
    {
        firstName: 'Marco',
        lastName: 'Bianchi',
        age: 32,
    },
    {
        firstName: 'Giovanni',
        lastName: 'Simoncelli',
        age: 17,
    },
    {
        firstName: 'Ludovica',
        lastName: 'Bassi',
        age: 26,
    },
    {
        firstName: 'Francesco',
        lastName: 'Rossi',
        age: 16,
    },
    {
        firstName: 'Andrea',
        lastName: 'Tommasini',
        age: 21,
    },
];

const canDrive = people.map((element) => {
    const { firstName, lastName, age } = element;
    if (age < 18) {
        { firstName, lastName, age } 'non può guidare perché ha {}';
    } else {
        { firstName, lastName, age } 'può guidare';
    }
})

console.log(canDrive);