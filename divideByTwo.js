// on stocke l'argument dans une variable
const argument = process.argv[2]

// on transforme la variable en int
const numberValue = Number(argument)

// on effectue l'opération
const result = numberValue / 2

// on affiche le résultat
console.log(result)