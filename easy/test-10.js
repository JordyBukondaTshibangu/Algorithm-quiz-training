/* 
    Largest Gap
    Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.

    Constraints

    n ≤ 100,000 where n is the length of nums
    Example 1
    Input
    nums = [4, 1, 2, 8, 9, 10]
    Output
    4
    Explanation
    The largest gap is between 4 and 8.
*/

module.exports.largestGap = numbers => {

    const sortedNumbers = numbers.sort(function(a, b){return a-b});
    const highestGap = []
    
    for(let i = 0; i < sortedNumbers.length; i++){
        
        let currentNumber = sortedNumbers[i]
        let nextNumber = sortedNumbers[i+1]
        let firstDiff = nextNumber - currentNumber

        let upFollowing = sortedNumbers[i+2]
        let secondDiff = upFollowing - nextNumber

        if(firstDiff < secondDiff){
            highestGap.push(secondDiff)
        }
    }

    console.log(highestGap[highestGap.length - 1])
}