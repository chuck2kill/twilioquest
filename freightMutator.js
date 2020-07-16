// création de la fonction
function mutate(inputArray) {
    let newArray = inputArray.map(item => item.toUpperCase());
    return newArray;
}

// variable et affichage du résultat
const cargo = ['apples', 'ray guns', 'oranges'];
console.log(mutate(cargo));