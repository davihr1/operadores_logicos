var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);
 var nummerosFiltrados = numeros.filter(
  function(valor) {
    return valor > 5
  }
 );
console.log(nummerosFiltrados);

function buscarValores(valor) {
  return valor<5
}
var numerosEmcontrados = numeros.filter(buscarValores);
console.log(numerosEmcontrados);
 var funcionarios = [
  {nome: "Luiz", idade: 62},
  {nome: "Davi", idade: 22},
  {nome: "Arthur", idade: 18},
  {nome: "Lucas", idade:40}
 ]

 var pessoasListagem = funcionarios.filter((valor) => {
  return valor.nome.length < 5;
 })
console.log(pessoasListagem);
