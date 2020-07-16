// création de fonction
function scan(inputArray) {
    // variables de nouveau tableau et de comptage
    let newArray = [];
    let count = 0;
    // boucle sur le tableau
    inputArray.forEach(element => {
        // si l'élément est bon, on ajoute son index au nouveau tableau
        if (element == 'contraband') {
            newArray.push(count);   
        }
        // on incrémente le compteur
        count += 1;
    });
    // on retourne le nouveau tableau avec les indexes
    return newArray;
}

// création du tableau et affichage du résultat
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);