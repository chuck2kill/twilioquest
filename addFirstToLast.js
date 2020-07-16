// création de la fonction
function addFirstToLast(inputArray) {
    // variable vide
    let firstAndLast = '';
    // si le tableau n'est pas vide
    if (inputArray.length > 0) {
        firstAndLast = inputArray[0] + inputArray[inputArray.length - 1];
    }
    return firstAndLast;
}

// affichage de la réponse
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));