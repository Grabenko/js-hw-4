const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const allArray = array1.concat(array2);
console.log(allArray);
let total = 0;
for (const value of allArray){
    total += value
}
console.log(total);