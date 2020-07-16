// on stocke l'argument dans une variable
const status = process.argv[2];

// test avec des conditions
if (status == 0) {
    console.log('alive');
} else if (status == 1) {
    console.log('flowering');
} else if (status == 2) {
    console.log('shedding');
} else {
    console.log('other');
}