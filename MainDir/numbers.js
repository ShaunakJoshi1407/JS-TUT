let num1 = new Number(43.8790)
console.log(num1)

console.log(num1.toString().length)
console.log(num1.toFixed(2))

let num2 = 23.896324
console.log(num2.toPrecision(18))

const num3 = 1000324
console.log(num3.toLocaleString('en-IN'));


//// +++++MATHS+++++++//////

console.log(Math)
console.log(Math.abs(-6));
console.log(Math.round(244.435));
console.log(Math.ceil(244.435));
console.log(Math.floor(244.435));
console.log(Math.max(244.435, Math.floor(244.56), 32, 89));

console.log(Math.floor((Math.random() * 9) + Math.log10(num1)));