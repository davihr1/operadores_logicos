var arr1 = [1,2,3,4,5,6,7,8];
arr1.splice(2,2);
console.log(arr1);

var nomes = ["Maria", "João", "Lucas", "Pedro"];
console.log(nomes);
var novos = nomes.splice(1,2,"Davi Favaro", "Meire");
console.log(nomes);
console.log(novos);

var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "manuela"];
var pessoa1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoa1);

var empresa = pessoa.concat(gerente)
console.log(empresa);


