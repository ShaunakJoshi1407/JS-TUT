const myArr = [0,1,2,true, "Hello"]
console.log(myArr)

let newArr = new Array(1, true, "xy")
console.log(newArr)
console.log(newArr.length)

myArr.push(3)
console.log(myArr)

const myArr2 = myArr.join();
console.log(myArr2.slice(1,3))

const arrA = [1,2,4]
const arrB = [4,5,8]

let arrC = arrA.concat(arrB)
console.log(arrC);

const arrD = [...arrA, ...arrB]
console.log(arrD)