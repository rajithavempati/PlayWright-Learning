/*function palindrome(str){
    for(let i = 0; i< str.length/2; i++){
        if (str[i] !== str[str.length -1 -i]){
            return false
        }
    }
    return true;
   
}

console.log(palindrome('racecar'));
console.log(palindrome('testing'));
*/

str = "madam"
function palindromeornot(str){
    revestr = str.split("").reverse().join("")
    if(str == revestr){
        console.log("given string is a palindrome")
    }
    else{
        console.log("given string is not a palindrome")
    }

}
palindromeornot(str)