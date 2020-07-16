// stockage de l'argument
const argument = process.argv[2];
let status = '';

// création de fonction
function getLaserSetting(argument) {
    if (argument == 'please') {
        status = 'OFF';
    } else {
        status = 'ON';
    }
    return status;
}

// affichage du statut
console.log(getLaserSetting(argument))