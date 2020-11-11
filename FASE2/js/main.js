'use strict'
let arrayText1 = ["A", "L", "3", "J", "A", "N", "D", "R", "O"]
let caracter = ""
const i = 0;
for (caracter of arrayText1) {
    if (!isNaN(caracter)) {
        console.log(`Els noms de persones no contenen el numero: ${caracter}`)
    } else if (caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U") {
        console.log(`He trobat la vocal ${caracter}`)
    } else {
        console.log(`He trobat la Consonat ${caracter}`)
    }
}