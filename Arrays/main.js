var valore = [8,1,7,9];
console.log(valore[2]);
console.log("Valores Invertidos: " + valore.reverse());


for(var pos = 0; pos < valore.length; pos++) {
  console.log("Posição: " + pos + " Valor: " + valore[pos]);
  
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Camaro";
carros[2] = "Jeep";
console.log(carros[2]);

var motos = new Array("BMW", "Yamaha", "Honda");
console.log(motos[0]);


// Calcular a media de todos os numeros de um ARRAY
var soma = 0;
for(var pos = 0; pos < valore.length; pos++) {
  soma+=valore[pos];
}

var media = soma/valore.length;
console.log(media);

var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('|'));

var retirado = arr1.shift();
var add = arr1.unshift(20);
console.log(add);
console.log(retirado);
console.log(arr1);
console.log("Posição do numero 3: " + arr1.indexOf(3));
arr1.push(7);
console.log(arr1);
arr1.pop();
console.log(arr1);


