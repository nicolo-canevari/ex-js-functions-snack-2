// SNACK 1

// Funzione dichiarativa 
function sommaDichiarativa(a, b) {
    return a + b;
}

// Funzione anonima assegnata a una varibile
const sommaAnonima = function (a, b) {
    return a + b;
}

// Arrow function
const sommaArrow = (a, b) => a + b;


// SNACK 2

const quadrato = numero => numero * numero;

console.log(quadrato(10));  //Output: 100 


// SNACK 3

function eseguiOperazione(num1, num2, operatore) {
    return operatore(num1, num2);
}

// Funzioni da usare come operatore
const somma = (a, b) => a + b;
const sottrai = (a, b) => a - b;
const moltiplica = (a, b) => a * b;
const dividi = (a, b) => b !== 0 ? a / b : 'Errore: divisione per zero';

// Chiamate log
console.log(eseguiOperazione(5, 3, somma));        // Output: 8
console.log(eseguiOperazione(10, 4, sottrai));     // Output: 6
console.log(eseguiOperazione(6, 7, moltiplica));   // Output: 42
console.log(eseguiOperazione(20, 4, dividi));      // Output: 5


// SNACK 4

// Generatore di funzioni creaTimer
function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    }
}

// Dopo 3 secondi: "Tempo scaduto!"
const timer = creaTimer(5000);
timer();


// SNACK 5

function stampaOgniSecondo(messaggio) {
    setInterval(() => {
        console.log(messaggio);
    }, 1000);
}

// debug
stampaOgniSecondo("Ciao, sto stampando ogni secondo");