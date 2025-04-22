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
// const quadrato = numero => numero ** 2;

console.log(quadrato(10));  //Output: 100


// ******************* SNACK 3 *******************

// Funzione che accetta due numeri e una funzione operatore (callback) per eseguire un'operazione su di essi
function eseguiOperazione(a, b, operatore) {
    // Esegui l'operatore passato come argomento
    return operatore(a, b);
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

    return () => {
        // Imposta un timeout che stampa un messaggio quando il tempo è scaduto
        setTimeout(() => {
            // Messaggio dopo il tempo definito
            console.log("Tempo scaduto!");
        }, tempo);
    }

}

// Crea un timer che scade dopo 5 secondi (5000 ms)
const timer5s = creaTimer(5000);
timer5s();  // Avvia il timer


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

    // Inizializza il contatore
    let count = 0;

    return () => {
        setInterval(() => {
            // Incrementa il contatore ogni intervallo di tempo
            count++;
            // Stampa il valore del contatore
            console.log(`Contatore: ${count}`);
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


// ******************* BONUS 8 *******************

function contoAllaRovescia(n) {

    // Inizia il conto alla rovescia da n
    let counter = n;

    const intervalId = setInterval(() => {
        // Stampa il numero corrente del conto alla rovescia
        console.log(counter);
        // Decrementa il contatore di 1
        counter--;

        if (counter < 0) {
            // Ferma l'intervallo quando il contatore arriva a -1
            clearInterval(intervalId);
            // Stampa "Tempo scaduto!" quando il conto alla rovescia termina
            console.log("Tempo scaduto!");
        }
    }, 1000);  // Intervallo di 1 secondo tra ogni numero

}

// Esegui il conto alla rovescia partendo da 5
contoAllaRovescia(10);


// ******************* BONUS 9 *******************

// Funzione che esegue una sequenza di operazioni, ognuna con un intervallo di tempo tra di loro
function sequenzaOperazioni(operazioni, intervallo) {

    // Cicla su ogni funzione all'interno dell'array 'operazioni'
    operazioni.forEach((operazione, index) => {
        // Imposta un timeout per eseguire l'operazione dopo un certo tempo
        setTimeout(() => {
            // Esegue la funzione corrente
            operazione();
            // Ogni operazione viene ritardata in base alla sua posizione (index) nell'array
        }, intervallo * index)
    })

}

// Esempio di array di operazioni da eseguire
sequenzaOperazioni([
    () => console.log("Operazione 1"),  // Verrà eseguita subito
    () => console.log("Operazione 2"),  // Verrà eseguita dopo 2 secondi
    () => console.log("Operazione 3")   // Verrà eseguita dopo 4 secondi 
], 2000);  // Intervallo tra le operazioni di 2 secondi


// ******************* BONUS 10 *******************

function creaThrottler(callback, limite) {

    // Tiene traccia dell'ultima volta che la funzione è stata eseguita
    let lastExecuted = 0;

    return function (...args) {
        // Ottiene il timestamp corrente (now)
        const now = Date.now();

        // Se è passato abbastanza tempo dal precedente esecuzione, esegui la funzione
        if (now - lastExecuted >= limite) {
            // Aggiorna l'ultima esecuzione
            lastExecuted = now;
            // Esegui la funzione con gli argomenti ricevuti
            callback(...args);
        } else {
            console.log('Non posso eseguire!');
        }
    };

}

// Crea una funzione throttledLog che stampa "Eseguito!" al massimo una volta ogni 2 secondi
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
