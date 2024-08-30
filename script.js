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

// Prendo il peso di ogni bicicletta
const bicycleWeight = bicycles.map(bike => bike.weight);
console.log('Bicycle weight', bicycleWeight);

// Controllo quale sia il peso più basso
const lighterBicycle = Math.min(...bicycleWeight);
console.log(lighterBicycle);

// Stampare in console la bici con peso minore utilizzando destructuring e template literal



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