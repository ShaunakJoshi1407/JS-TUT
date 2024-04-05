// Object using literals //

const obj1 = {
    name: "Shaun",
    age: "24",
    Location: "USA",
    "Job Role": "Student Assistant"
}
console.log(obj1.Location)
console.log(obj1["Job Role"])

obj1.age = 34
//Object.freeze(obj1)
obj1.name = "Bro"

console.log(obj1)

let obj2 = {
    role: "Misser"
} 
obj2.fb = function(){
    console.log("Nunez");
}

obj1.print = function(){
    console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
}
console.log(obj2.fb())
console.log(obj1.print())

obj1.obj2 = obj2

console.log(obj1)

// Singleton object: using constructor //

const obj5 = {a:1, b:2}
const obj6 = {b:9, c:10}

let obj9 = Object.assign({}, obj5, obj6)
console.log(obj9)

let obj10 = {...obj1, ...obj9}
console.log(obj10)

console.log(Object.keys(obj10))
console.log(Object.entries(obj10))