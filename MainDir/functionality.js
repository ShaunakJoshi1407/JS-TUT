const Funky = function(user){
    if (!user){
        console.log("Enter a value")
        return 
    }
    return `The user ${user} just logged in`
}
res = Funky("Shaunak")
console.log(res)

res2 = Funky()
console.log(res2)

function returnValueFromArray(getArray){
    return getArray[2]
}

const myArr = [1,2,3,5,6]
const val = returnValueFromArray(myArr)
console.log(val)