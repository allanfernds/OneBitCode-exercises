let spaceShip = "Supernova"
let invertedName = ""

for (i = spaceShip.length - 1; i >= 0; i--) {
    invertedName += spaceShip[i]
    if (spaceShip[i] == "e") {
        break
    }

}
console.log("Nome da nave: " + spaceShip + "\nNome Invertido: " + invertedName)