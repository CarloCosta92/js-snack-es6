//Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

console.log("carlo")

//array biciclette
const biciclette = [

    {
        "nome" : "bianchi",
        "peso" : 10
    },

    {
        "nome" : "rossi",
        "peso" : 8

    },

    {
        "nome" : "verdi",
        "peso" : 12

    }

]

console.log(biciclette);

// pusho dentro un nuovo array tutti i pesi
const pesi = [];
for (let i = 0; i < biciclette.length; i++) {
  pesi.push(biciclette[i].peso);
}

console.log(pesi);


// ciclo for per trovare quello che pesa di meno
let pesoMinimo = pesi[0]; 

for (let i = 0; i < pesi.length; i++) { 
  if (pesi[i] < pesoMinimo) {
    pesoMinimo = pesi[i]; 
  }
}

console.log(pesoMinimo); 

// stampo su html

let resultElement = document.getElementById("risultato");

resultElement.innerHTML = `La bicicletta più leggera pesa ${(pesoMinimo)} chilogrammi `;



