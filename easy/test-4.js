/* 
     Count the Number of Vowels in a String
*/

module.exports.countVoyelNumber = string => {
    let count = 0

    for(let i = 0; i < string.length; i++){
        let check = string.charAt(i)
        if(check.match('a') || check.match('e') || check.match('i') || check.match('u') || check.match('o')){
            count++
        } 
    }

    console.log(count)
}