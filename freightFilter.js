// création de la fonction
function scanAndFilter(inputArray, inputString) {
    // méthode filter qui permet de filtrer un tableau sur un item
    let newArray = inputArray.filter(item => item != inputString);
    return newArray;
}

// variable et affichage du résultat
const filtered = scanAndFilter(
    ['dogs', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
);
console.log(filtered);