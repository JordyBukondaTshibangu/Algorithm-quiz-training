/*
    Collatz Sequence
    Given a positive integer n, find the length of its Collatz sequence. The Collatz sequence is generated sequentially where

    n = n / 2 if n is even
    n = 3 * n + 1 if n is odd
    And the sequence ends if n = 1
*/

module.exports.collatzSequence = number => {

    const sequences = [number]
    let seqLength = sequences[sequences.length - 1]

    let i = 0;
    while (seqLength > 1){
        if(sequences[i] % 2 === 0 ){
            let nextNumberEven = sequences[i]/2
            sequences.push(nextNumberEven)
        } else if(sequences[i] % 2 !== 0 && sequences[i] > 1){
            let nextNumberOdd = 3 * sequences[i] + 1
            sequences.push(nextNumberOdd)
        } else {
            break;
        }
        i++;
    }
    console.log(sequences.length)
}