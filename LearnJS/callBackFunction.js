const { add } = require("./functions")

function addition(value1){
    console.log("sum of few numbers "+ value1)
}

function substraction(numbers){
    console.log("difference of two " + numbers)
}
//substraction("digits")

function multiplication(name, callback){
    console.log("product of few numbers " + name)
    //addition() // calling addtion function inside of this function
    callback(name)

}

multiplication("Raju", addition)

//multiplication("Ram")
//multiplication("Krish")