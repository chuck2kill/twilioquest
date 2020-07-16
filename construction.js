// création de la fonction
function construct(name) {
    // construction d'un objet JSON
    let person = {
        name: name,
        material: 'human',
        assemble: true,
        duration: 1000
    };
    return person;
}

// tests de validité
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name);
console.log('duration is: ' + somePerson.duration);