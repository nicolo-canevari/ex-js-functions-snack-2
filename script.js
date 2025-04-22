// ******************* SNACK 1 *******************

// Funzione dichiarativa che somma due numeri
function sommaDichiarativa(a, b) {
    return a + b;
}

// Funzione anonima assegnata a una variabile che somma due numeri
const sommaAnonima = function (a, b) {
    return a + b;
}

// Arrow function che somma due numeri
const sommaArrow = (a, b) => a + b;


// ******************* SNACK 2 *******************

// Funzione che calcola il quadrato di un numero
const quadrato = numero => numero * numero;

console.log(quadrato(10));  //Output: 100


// ******************* SNACK 3 *******************

// Funzione che accetta due numeri e una funzione operatore (callback) per eseguire un'operazione su di essi
function eseguiOperazione(num1, num2, operatore) {
    // Esegui l'operatore passato come argomento
    return operatore(num1, num2);
}

// Definizione delle funzioni operatore per somma, sottrazione, moltiplicazione e divisione
const somma = (a, b) => a + b;
const sottrai = (a, b) => a - b;
const moltiplica = (a, b) => a * b;
const dividi = (a, b) => b !== 0 ? a / b : 'Errore: divisione per zero';  // Evita la divisione per zero

// Eseguiamo l'operazione con diverse funzioni
console.log(eseguiOperazione(5, 3, somma));        // Output: 8
console.log(eseguiOperazione(10, 4, sottrai));     // Output: 6
console.log(eseguiOperazione(6, 7, moltiplica));   // Output: 42
console.log(eseguiOperazione(20, 4, dividi));      // Output: 5


// ******************* SNACK 4 *******************

// Funzione generatore di timer che accetta un tempo in millisecondi
function creaTimer(tempo) {
    return function () {
        // Imposta un timeout che stampa un messaggio quando il tempo è scaduto
        setTimeout(() => {
            // Messaggio dopo il tempo definito
            console.log("Tempo scaduto!");
        }, tempo);
    }
}

// Crea un timer che scade dopo 5 secondi (5000 ms)
const timer = creaTimer(5000);
timer();  // Avvia il timer


// ******************* SNACK 5 *******************

// Funzione che stampa un messaggio ogni secondo (1000 ms)
function stampaOgniSecondo(messaggio) {
    setInterval(() => {
        // Stampa il messaggio ogni secondo
        console.log(messaggio);
    }, 1000);
}

// Avvio della stampa ogni secondo
stampaOgniSecondo("Ciao, sto stampando ogni secondo");


// ******************* SNACK 6 *******************

// Funzione che crea un contatore automatico, che incrementa un numero ogni intervallo di tempo
function creaContatoreAutomatico(intervallo) {
    return function () {
        // Inizializza il contatore
        let contatore = 0;
        setInterval(() => {
            // Incrementa il contatore ogni intervallo di tempo
            contatore++;
            // Stampa il valore del contatore
            console.log(`Contatore: ${contatore}`);
        }, intervallo);
    }
}

// Crea e avvia un contatore che incrementa ogni 2 secondi (2000 ms)
const avviaContatore = creaContatoreAutomatico(2000);
avviaContatore();  // Avvia il contatore


// ******************* SNACK 7 *******************

// Funzione che stampa un messaggio ogni intervallo di tempo, ma si ferma dopo un certo periodo
function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const intervalId = setInterval(() => {
        // Stampa il messaggio ogni intervallo di tempo
        console.log(messaggio);
    }, tempoAvvio);

    // Dopo il tempo di stop, ferma il timer
    setTimeout(() => {
        // Ferma l'interval
        clearInterval(intervalId);
        // Stampa che il timer è fermato 
        console.log("Timer fermato");
    }, tempoStop);
}

// Esegui la funzione con intervallo di 1 secondo e fermala dopo 5 secondi
eseguiEferma("Sto stampando a intervalli!", 1000, 5000);  
