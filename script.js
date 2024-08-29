// ! -------------------- SNACK 1 ----------------------

console.log('-----------  SNACK 1  ------------');

const guests = [
    {
        tableName: 'Tavolo Vip',
        name: 'Brad Pitt',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Johnny Depp',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Lady Gaga',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Cristiano Ronaldo',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Georgina Rodriguez',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Chiara Ferragni',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'George Clooney',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Amal Clooney',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Fedez',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Amadeus',
        seatOccupied: 0,
    },
    {
        tableName: 'Tavolo Vip',
        name: 'Fiorello',
        seatOccupied: 0,
    }
];

// Creo una funzione che genera numeri casuali sempre diversi
const createRandomNumbers = (max, totalNumbers) => {
    const randomNumbers = [];

    // Ciclo while poiché dovrò pescare più volte il numero casuale per non avere doppioni
    while (randomNumbers.length < totalNumbers) {
        const randomNumber = Math.floor(Math.random() * max) + 1;

        // Controllo se il numero creato è già nell'array. Se si, genero altri numeri
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

const seatNumber = createRandomNumbers(11, 11);
console.log(seatNumber);


let i = 1;

const placeholder = guests.forEach(seat => {
    seat.seatOccupied = seatNumber[i];
    i++;
})

console.log(guests);


// ! -------------------- SNACK 2 ----------------------

console.log('-----------  SNACK 2  ------------');

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
