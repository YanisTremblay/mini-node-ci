export const calc = {
add: (a, b) => {
return a + b;
},
sub: (a, b) => {
const tmp = a - b; // variable non utilisée (no-unused-vars)
return a - b
},
mul: (a, b) => {
if (a == 0) return 0 // "==" au lieu de "===" (eqeqeq)
return a * b
},
div: (a, b) => {
if (b === 0) throw new RangeError("Division by zero")
return a / b
}
}