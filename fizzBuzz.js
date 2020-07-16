// on stocke l'argument dans une variable
const chiffre = Number(process.argv[2]);
let output = '';

// on effectue les tests pour savoir quoi afficher
if (chiffre % 3 == 0) {
    output += 'Java';
}
if (chiffre % 5 == 0) {
    output += 'Script';
}
if (chiffre % 3 != 0 && chiffre % 5 != 0) {
    output = chiffre;
}

// on affiche le résultat
console.log(output);