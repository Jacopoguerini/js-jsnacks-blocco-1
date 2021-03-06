// Snack #4: Generatore di “nomi cognomi” casuali.
// così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// Lista di nomi e cognomi
var listaNomi = ["Aristotele", "Eraclito", "Anassagora", "Diogene", "Socrate"];
var listaCognomi = ["di Savoia-Genova", "I di Collalto", "IV Aldobrandeschi", "di Montbéliard", "III del Monferrato"];

console.log(listaNomi);
console.log(listaCognomi);

// Funzione generi una coppia nome-cognome casuale per 10 volte e che stampi in pagina utilizzando il tag li
function nomeCognomeRandom (nome, cognome) {

    var nomeCasuale = listaNomi[Math.floor(Math.random() * listaNomi.length)];
    var cognomeCasuale = listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

    return nomeCasuale + " " + cognomeCasuale;
}

for (var i = 0; i < 10; i++) {
    var personaInLista = nomeCognomeRandom(listaNomi, listaCognomi)
    document.getElementById("lista-festa").innerHTML += "<li>" + personaInLista + "</li>";
}
