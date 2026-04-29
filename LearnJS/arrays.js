//arr = [] //empty array in JS; arr = {} in JAVA

arr1 = [1,3,2,6,5,9,6] //homogenious elements
// sort in descending order

// sorted = arr.sort((a, b) => b - a)
// console.log(sorted)

arr2 = [2, "raju", true, undefined, null, {firstname: "nikhil", lastname:"P"}]//mixed datatypes
//arr:string =[]//declare always in string datatype

//count how many elements
console.log(arr1.length) //7 elements are present in arr1
console.log(arr2.length)
console.log(arr2[2])//prints 3rd element from arr2, index starts from 0
console.log(typeof(arr1))//object, return type of
console.log(typeof(arr2[1])) // prints "string" as in arr2, 2nd element is "Raju"

menuitems = [
    'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Directory',
  'Maintenance', 'Claim',
  'Buzz'
]
// will listed in sorted order
menuSortedOrder = menuitems.sort()
console.log(menuSortedOrder)

//concatinate
arr3 = menuitems.concat(arr2)
console.log(arr3)

arr4 =[8,3,4,52,23]
arr5 = arr4.sort()
console.log(arr5)//prints arr4 in sorted order
arr6 =arr5.reverse()
console.log(arr6)//prints arr5 in reverse order and stored arr6


//push, unshift - push: will add the elements at the end; unshift: will add the elements at the beginning
//arr4.push("hello", "walk")

//pop,shift - pop: remove the last element; shift: remove the first element
//menuitems.pop()
//console.log(menuitems)
//split - separate into character/words
// str2 = "this is java script"
// ar1 = str2.split(" ")
// console.log(ar1)
// join - 

//includes 


















































































