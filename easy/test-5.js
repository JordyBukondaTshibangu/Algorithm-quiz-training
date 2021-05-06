/*
    Given an integer n, return the sum of the first n positive odd integers.
    Constraints
    n ≤ 1,000
*/

module.exports.sumOfOddInt = number => {
    const array = []
    const add = (a,b) => a + b
    let i = 0
    while(array.length < number){
            if(i%2 !== 0){
                array.push(i)
            }
            i++
    }
    const sum = array.reduce(add,0)
    console.log(sum)
}