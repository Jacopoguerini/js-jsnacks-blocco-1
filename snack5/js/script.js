// Snack #5:

// Crea un array vuoto.
var arrayVuoto = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (var i = 0; i < 6; i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero qui sotto:"));
    console.log(numeroUtente);
}

// Funzione per verificare se il numero inserito è dispari se è dispari e se lo è, inseriscilo nell'array
function numeroDispari(num) {
    var controllo = false;
    if (num % 2 != 0) {
        controllo = true
    }
    return console.log(controllo);
}


// Stampa l'array in console
console.log(arrayVuoto);