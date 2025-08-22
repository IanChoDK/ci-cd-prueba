const { suma, resta, mult } = require('./math');

console.assert(suma(2, 3) === 5, 'Error suma');
console.assert(resta(5, 3) === 2, 'Error resta');
console.assert(mult(2, 5)) === 10, 'Error multiplicacion'

console.log("Todo funciona!!");
