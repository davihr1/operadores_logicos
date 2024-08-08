var a = [10,20,30,40,50,60];

 for( let valor of a ) {
   console.log(valor);
 }
console.log("-------------------");

a.forEach(valor => console.log(valor));

console.log("-------------------");

var tot = 0;
a.forEach(valor => {
  tot += valor;
})
console.log(tot);
