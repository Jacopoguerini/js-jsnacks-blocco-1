// Snack #5:

// Crea un array vuoto.
var numeri = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (var i = 0; i < 6; i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero qui sotto:"));
    console.log(numeroUtente);

    if (seDispari(numeroUtente)) {
        numeri.push(numeroUtente);
    }
}

// Funzione per verificare se il numero inserito è dispari se è dispari e se lo è, inseriscilo nell'array
function seDispari(num) {
    var controllo = false;
    if (num % 2 != 0) {
        controllo = true;
    }
    return controllo;
}

// Stampa l'array in console
console.log(numeri);