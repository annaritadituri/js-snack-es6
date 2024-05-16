'use strict';

//////////////////////////////////////////////////////////

//CREARE UN ARRAY DI OGGETTI
const squadre = [

    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    }

]
console.log({squadre});

//ASSEGNARE PUNTI RANDOM
for (let i = 0; i < squadre.length; i++) {

    squadre[i].falliSubiti = genIntRandom(500, 1000);
    squadre[i].puntiFatti = genIntRandom(50, 100);

}
//console.log({squadre});

//CREARE UN NUOVO ARRAY
const falli = squadre.map((element) => {
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti
     }
})
console.log({falli});


////////////////////////////////////////////////////////

//FUNZIONE genIntRandom()
function genIntRandom(min, max) {

    const randomInt = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

    return randomInt;

}