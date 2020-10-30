'use strict'
let arrayText1 = ["C", "C", "B", "B", "N", "A", "A", "A", "A"];
let mapa = new Map();
let mapa2 = new Object();
let count = 0;
for (const caracter of arrayText1) {
  if(mapa.get(caracter) == 0 || mapa.get(caracter) == undefined){
    mapa.set(caracter, 1);
  }else{
    count = mapa.get(caracter);
    mapa.set(caracter, count + 1);
  }
}
console.log(mapa);

// OPCION2
for (const caracter of arrayText1) {
  if(mapa2.hasOwnProperty(caracter)){
    count = mapa2[caracter];
    Object.defineProperty(mapa2, caracter, {value: count + 1, writable: true})
  }else{
  Object.defineProperty(mapa2, caracter, {value: 1, writable: true})
  }
}
console.log(mapa2);

