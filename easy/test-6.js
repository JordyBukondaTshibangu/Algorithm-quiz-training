/*
You are given a list of integers rooms and an integer target. Return the first integer in rooms that's target or larger. 
If there is no solution, return -1.

Constraints

0 ≤ n ≤ 100,000 where n is the length of rooms
*/

module.exports.FirstFitRoom = (rooms, number) => {
    
    for(let i = 0; i < rooms.length; i++){
        if( rooms[i] >= number){
            console.log(rooms[i])
            break
        }
    }
}