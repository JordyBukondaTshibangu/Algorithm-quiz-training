/* 
    FizzBuzz
    Given an integer n, return a list of integers from 1 to n as strings except for multiples of 3 use “Fizz” 
    instead of the integer and for the multiples of 5 use “Buzz”.
    For integers which are multiples of both 3 and 5 use “FizzBuzz”.

    Constraints

    0 ≤ n ≤ 100,000
    Example 1
    Input
    n = 15
    Output
    ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
*/

module.exports.FizzBuzz = number => {
    const numbers = []

    for(let i=1; i <= number; i++){
        numbers.push(i)
    }
    numbers.map((value, index) => {
        if(value % 3 === 0 && value % 5 === 0 && value > 0){
            numbers[index] = "FizzBuzz"
        } 
        else if(value % 3 === 0 && value > 0){
            numbers[index] = "Fizz"
        } 
        else if(value % 5 === 0 && value > 0){
            numbers[index] = "Buzz"
        }
        return value
    })
     console.log(numbers)
}