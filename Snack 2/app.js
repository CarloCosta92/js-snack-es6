// console.log("carlo")

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// creo array squadre di calcio e gli do il nome e creo proprietà per punti e falli settati a 0

const squadre = [
    { 
        nome: "Torino", 
        punti: 0, 
        falli: 0 
    },
    { 
        nome: "Hellas", 
        punti: 0, 
        falli: 0 
    },
    {
         nome: "Reggina", 
         punti: 0, 
         falli: 0 
    },
    { 
        nome: "Fiorentina", 
        punti: 0, 
        falli: 0 
    },
    { 
        nome: "Genoa", 
        punti: 0, 
        falli: 0 
    }
];

console.log(squadre);

// funzione per numeri randomici interi da 1 a 50

function numeroRandom() {
    return Math.floor(Math.random() * 50) + 1;
}

// dare il numero randomico a punti e falli

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = numeroRandom();
    squadre[i].falli = numeroRandom();
}

console.log(squadre);

// fare nuovo array per stampare le squadre con solo i nomi e i falli

const squadreEFalli = [];

for (let i= 0; i< squadre.length; i++) {
    squadreEFalli.push({
        nome: squadre[i].nome,
        falli: squadre[i].falli

    })
}

console.log(squadreEFalli);