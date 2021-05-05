/*
    Reverse a string
*/

module.exports.reverseString = string => {
    const stringToArray = string.split('').reverse().join('')
    console.log(stringToArray)
}