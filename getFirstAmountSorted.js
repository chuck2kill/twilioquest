// création de la fonction
function getFirstAmountSorted(inputArray, inputNumber) {
    // on trie le tableau
    inputArray.sort();
    // on créé un nouveau tableau
    newArray = inputArray.slice(0, inputNumber);
    return newArray;
}

// affichage de résultat
console.log(getFirstAmountSorted(['cheerios', 'apple jacks', 'lucky charms'], 3));
console.log(getFirstAmountSorted(['golden', 'terrier'], 1));
console.log(getFirstAmountSorted(['third', 'second', 'first'], 2));
console.log(getFirstAmountSorted(['golden', 'terrier', 'boxer'], 0));