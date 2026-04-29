function automation(){
console.log("playwright")
console.log("cypress")
}




//function with parameters
function add(num1, num2){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

// add(10,12)

// add(33,22)



/** function login(username, password){
 * await page goto(url)
 * await page.locator(xpath).fill(username)
 * await page.locator(xpath).fill(username)
 * await page.locator(xpath).click()
 * }
 * login("username1", "password1")
 */



// function multiply(v1=4, v2=3){
//     console.log(v1+v2)

// }

// multiply(3,2)

// // return keyword
// function multiply1(v1=4, v2=1){
//    return v1+v2
// }
// x = multiply(5,2)//7
// console.log(x)// prints 7 

module.exports = {
    automation,
    add
}