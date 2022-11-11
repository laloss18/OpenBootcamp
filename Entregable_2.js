var num = prompt();
function numero(num){
  if (num>0){
    return 'El numero es positivo';
  }else if(num === 0){
    return 'El numero es 0';
  }else{
    return 'El numero es negativo'}
}

console.log(numero());
  
while (let numeroWhile < 3){
  console.log(numeroWhile++)
}

do{
  let i = 0;
  i = i + 1;
  numeroWhile = numeroWhile + i;
} while(numeroWhile < 3);

for(let numeroFor = 0; numeroFor <= 3; numeroFor++){
  console.log(numeroFor);
}

var estacion = prompt()
switch(estacion){
  case 'Verano': 
    console.log('Es verano!');
    break;
    
   case 'Otoño': 
    console.log('Es otoño!');
    break;
    
   case 'Invierno': 
    console.log('Es invierno!');
    break;
    
   case 'Primavera': 
    console.log('Es primavera!');
    break;
    
   default:
     console.log('No es una estacion');
     break;
}
