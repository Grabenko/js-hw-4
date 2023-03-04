const numbers = [23,1,45,87,4,55,6]
let bigNumber = numbers[0]

for(const number of numbers){
    if( number>bigNumber){
        bigNumber = number
    }
}
console.log(bigNumber );