// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico
// comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).


// **************** ESERCIZIO CON FOR *************

// var array_cognomi = ['Del Re', 'Settanni', 'Lieggi' ]; // inizializzo array con i cognomi
// var cognome_utente = prompt('inserisci il tuo cognome'); // chiedo all' utente di inserire il cognome
//
// array_cognomi.push(cognome_utente); // pusho il cognome inserito nell' array_cognomi
//
// console.log(array_cognomi.sort()); // stampo la lista dei cognomi in ordine alfabetico
//
// for (var i = 0; i < array_cognomi.length; i++) { // leggo l'array_cognomi
//
//     if (array_cognomi[i] == cognome_utente){
//         console.log('Il tuo cognome si trova in : ' + (i + 1) + 'a posizione'); // stampo la posizione del cognome nell' array
//     }
// }


// ********************************* ESERCIZIO CON WHILE ********************

var array_cognomi = ['Del Re', 'Settanni', 'Lieggi' ]; // inizializzo array con i cognomi
var cognome_utente = prompt('inserisci il tuo cognome'); // chiedo all' utente di inserire il cognome

array_cognomi.push(cognome_utente); // pusho il cognome inserito nell' array_cognomi

console.log(array_cognomi.sort()); // stampo la lista dei cognomi in ordine alfabetico

var i = 0  // inizializzo il contatore del ciclo while
while (array_cognomi[i] != cognome_utente){ // chiedo di rimanere nel ciclo finchè array_cognomi[i] è diverso da cognome_utente
    i++; // aggiorno il contatore di 1
}
console.log('Il tuo cognome si trova in : ' + (i + 1) + 'a posizione'); // quando array_cognomi[i] sarà uguale a cognome_utente, stamperò la posizione del cognome nell' array


//************************************ ESERCIZIO CON DO-WHILE *****************************

// var array_cognomi = ['Del Re', 'Settanni', 'Lieggi' ]; // inizializzo array con i cognomi
// var cognome_utente;
// var contatore = 0;
//
// do { //fai questo
//     cognome_utente = prompt('inserisci il tuo cognome'); //chiedi cognome utente
//
//     if (!isNaN(cognome_utente)) {  //se input è un numero
//     alert('inserisci un cognome valido'); // stampa alert
//     }
// }
//
// while (!isNaN(cognome_utente)); // esegui il corpo del do finchè il cognome utente digitato è un numero
//
// array_cognomi.push(cognome_utente); // pusho il cognome inserito nell' array_cognomi
// console.log(array_cognomi.sort()); // stampo la lista dei cognomi in ordine alfabetico
//
// var i = 0  // inizializzo il contatore del ciclo while
// while (array_cognomi[i] != cognome_utente){ // chiedo di rimanere nel ciclo finchè array_cognomi[i] è diverso da cognome_utente
//         i++; // aggiorno il contatore di 1
// }
//
// console.log('Il tuo cognome si trova in : ' + (i + 1) + 'a posizione'); // quando array_cognomi[i] sarà uguale a cognome_utente, stamperò la posizione del cognome nell' array
