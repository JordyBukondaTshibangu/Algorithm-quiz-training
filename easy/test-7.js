/*
Noisy Palindrome
You are given a string s containing lowercase and uppercase alphabet characters as well as digits from "0" to "9". 
Return whether s is a palindrome if we only consider the lowercase alphabet characters.

Constraints

0 ≤ n ≤ 100,000 where n is the length of s
*/

module.exports.noisyPalindrome = string => {

    let lowerCasesLetters = []

    for(let i=0; i < string.length ; i++){
          const letterLowerCase = string.charAt(i)
          const stringToInt = parseInt(letterLowerCase)
            if(letterLowerCase === letterLowerCase.toLowerCase() && Number.isNaN(stringToInt)){
                lowerCasesLetters.push(letterLowerCase)
            }
    }
    const lowercaseString = lowerCasesLetters.join('')
    const reverseLowercaseString = lowerCasesLetters.reverse().join('');
    
    if(lowercaseString === reverseLowercaseString){
        console.log(true)
    } else {
        console.log(false)
    }
}