function suma(a, b, c){
return a + b + c;
}
console.log(suma(5, 3, 6))

class Coche{
  constructor(puerta){
    this.puerta = puerta;
    }
  }
  
function addDoor(){
  Coche.puerta = Coche.puerta++
}

var coche = new Coche();
console.log(coche.addDoor())
console.log(coche.puerta)
