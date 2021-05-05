/* 
    checks the number of occurrences of a character in a string.
*/

module.exports.checkOccurence = (string, letter) => {
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === letter){
            count++
        }
    }
    console.log(count)
}