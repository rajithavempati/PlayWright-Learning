string1 = "army"
string2 = "rAKHI"

function anagramsornot(string1, string2){
str3 = string1.split("").sort().join("")//army
str4 = string2.split("").sort().join("")//army

if(str3 == str4){

    console.log("both are anagrams")
    
}
else{
    console.log("both are not anagrams")

}
}
anagramsornot(string1, string2)