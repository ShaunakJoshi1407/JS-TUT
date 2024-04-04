let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.getDate())

// Datatype of myDate
console.log(typeof myDate)

const newDate = new Date(2015, 8, 5, 8, 23)
console.log(newDate.toLocaleString())

console.log(Date.now());
console.log(Math.floor(Date.now()/1000))
