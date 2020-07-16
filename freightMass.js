// création de la fonction
function calculateMass(inputArray) {
    // utilisation de la méthode reduce
    let mass = inputArray.reduce((acc, current) => acc + current.length, 0);
    return mass;
}

// variable et affichage du résultat
const cargo = ['cat', 'dog', 'bird'];
console.log('Total mass of items is ' + calculateMass(cargo));