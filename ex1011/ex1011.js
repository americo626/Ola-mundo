var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var PI = 3.14159;
var raio = parseFloat(input);

var volumeEsfera = (4/3) * PI * (raio * raio * raio);

console.log("VOLUME = " + volumeEsfera.toFixed(3));