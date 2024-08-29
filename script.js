console.log('JS OK');

const cars = [
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'benzina',
    },
    {
        marca: 'FIAT',
        modello: 'Doblò',
        alimentazione: 'diesel',
    },
    {
        marca: 'FIAT',
        modello: 'Panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'FIAT',
        modello: 'Fiorino',
        alimentazione: 'metano',
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'diesel',
    },
    {
        marca: 'Ford',
        modello: 'Ka',
        alimentazione: 'gpl',
    },
    {
        marca: 'Smart',
        modello: 'Smart',
        alimentazione: 'elettrico',
    },
];



const petrolCars = cars.filter(car => car.alimentazione === 'benzina');
console.log(petrolCars);

const dieselCars = cars.filter(car => car.alimentazione === 'diesel');
console.log(dieselCars);

const gplCars = cars.filter(car => car.alimentazione === 'gpl');
console.log(gplCars);

const electricCars = cars.filter(car => car.alimentazione === 'elettrico');
console.log(electricCars);

const gasCars = cars.filter(car => car.alimentazione === 'gas');
console.log(gasCars);