// création de la fonction
function calculatePower(inputArray) {
    let result = 0;
    inputArray.forEach(element => {
        result = result + (element * 2);
    });
    return result;
}

// variable et affichage du résultat
const test = [1, 12, 3];
console.log(calculatePower(test));