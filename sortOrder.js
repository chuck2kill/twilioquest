// stockage des arguments dans des variables
const firstValue = String(process.argv[2]).toLowerCase();
const secondValue = String(process.argv[3]).toLowerCase();

// comparaison des variables
if (firstValue < secondValue) {
    console.log(-1);
} else if (firstValue > secondValue) {
    console.log(1);
} else {
    console.log(0);
}
