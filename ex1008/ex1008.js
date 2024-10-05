var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split("\n");

var numeroDoFuncionario = valores.shift();
var qtdHorasTrabalhadas = valores.shift();
var valorHora = valores.shift();

var salario = qtdHorasTrabalhadas * valorHora;

console.log("NUMBER = " + numeroDoFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));