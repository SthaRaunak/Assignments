//Q3
// calculate sum of array using either for in or for of
//Output= 20
const arr = [2, 5, 6, 7];
let sum = 0 ;
for(let i of arr){
    sum = sum + i; //adding the array element
}

console.log(sum)