// map()
// filter()
// reduce()
// find()
// includes()
// some() / every()
// slice() / splice()

// for of
// ar2 =["Phil", "Joe", "Alex"]

// for(let element of ar2){
//     console.log(element)
// }

// fill method: replace values
let array5 = [2,3,4,5,6]
array5.fill(8);
console.log(array5)

//partial replace/fill
let array6 = ["phil", "johny", "alex", "Nancy", "Paul", "nik" ]
array6.fill("Mike",1,4)
console.log(array6) 


//copy() - move/copy values inside same array

let array7 = [1,2,3,4,5,6]
array7.copyWithin(1,3)//copy from index 3 -> place at index 1
console.log(array7)

// copy with range
let array8 = [1,2,3,4,5,6,7,8]
array8.copyWithin(1,3,5) //copy index 3 to 4 -> replace starting at index 1
console.log(array8)

// Flatten() / Advanced()

let array9 = [2, "raju", true, undefined, null, {firstname: "nikhil", lastname:"P"}]
let result = array9.flat()
console.log(result)

// deep flatten

let array10 = [2, "raju", true, [undefined, null, ['firstname', "nikhil", "lastname","P"]]]
let result2 = array10.flat(3); //flat (depth) controls how deep to flatten
console.log(result2)
