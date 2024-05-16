'use strict';

//////////////////////////////////////////////////////////

//CREARE UN ARRAY DI OGGETTI
const bikes = [
    {
        name: "Bianchi",
        weight: 7.8
    },

    {
        name: "Look",
        weight: 8.0
    },

    {
        name: "Pinarello",
        weight: 7.5
    }
]

console.log({bikes});

//ARRAY DI VALORI DI PESO
const weights = bikes.map((element) => {
    return element.weight;
})
//console.log({weights});

//VALORE MIN + POSIZIONE
const minWeightPosition = minValue(weights);
console.log({minWeightPosition});

//STAMPARE IL NOME DEL MIN
const position = (minWeightPosition.position - 1);
console.log({position});
console.log(`La bici con peso minore è la ${bikes[position].name} con ${bikes[position].weight}kg.`);

////////////////////////////////////////////////////////

//FUNZIONE minValue()
function minValue(array) {

    let min = 2147483647;
    let pair;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            console.log(array[i]);
            console.log({min});
        }
    }

    let i = 0;
    while (array[i] !== min) {
        i++;
    }

    return pair = {
        position: i + 1,
        value: min
    };

}


