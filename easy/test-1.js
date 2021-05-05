/*
    Given a string s, return whether it is a palindrome.
    Constraints
    n ≤ 100,000 where n is the length of s
    A Palindorme is a string that can be written in both sense
*/

module.exports.palindorme = string => {
    
    const reversedString = string.split('').reverse().join('')
    if(string === reversedString){
        console.log(string, "Is a palidorme")
    } else {
        console.log(string, "Is not a palidorme")
    }
}
