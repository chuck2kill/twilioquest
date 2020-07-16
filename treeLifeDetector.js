// on stocke l'argument dans une variable
const argument = process.argv[2]

// si l'argument est 0 on affiche 'alive, sinon on affiche 'other'
if (argument == 0) {
    console.log('alive')
}
else {
    console.log('other')
}