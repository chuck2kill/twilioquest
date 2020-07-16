// création de fonction
function scan(inputArray) {
    // variable de comptage d'itération
    let contraboundCount = 0;
    // boucle foreach
    inputArray.forEach(element => {
        if (element == 'contraband') {
            contraboundCount += 1
        }
    });
    return contraboundCount;
}

// création de la variable et affichage du résultat
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband', 'contraband']);
console.log('Number of "contraband": ' + numItems);