// on stocke les arguments dans des variables
const status = Number(process.argv[2])
const dryness = Number(process.argv[3])

// si les conditions sont réunies, on affiche 'WATER'
if (status == 0 && dryness > 10) {
    console.log('WATER')
}