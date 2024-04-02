const accountId = 2
let accountEmail = "newray@gmail.com"
var psswd = "TrialBased"
acctCity = "Pune"

console.log([accountEmail, psswd, acctCity])
console.log(typeof(acctCity))
console.log(typeof(accountId))
console.log(typeof(null))
console.log(typeof(undefined))

/*
A variable declared with var is defined throughout the program. 
One of the issues with using the var keyword was redeclaring a variable inside a 
block will also redeclare the variable outside the block. 


var and let are both used for variable declaration in javascript but the 
difference between them is that var is function scoped and let is block scoped.
Variable declared by let cannot be redeclared and must be declared before use 
whereas variables declared with var keyword are hoisted. 
*/

let acctId = Number(accountId)
console.log(typeof(acctId))

score = "334521sddfd"
valueOfScore = Number(score)
console.log(typeof(valueOfScore))
console.log(valueOfScore)