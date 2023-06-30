//Q3
// calculate sum of array using either for in or for of
//Output= 20
const arr = [2, 5, 6, 7];
let sum = 0;
for (let i of arr) {
    sum = sum + i; //adding the array element
}

console.log(sum)

//Q4
//high level
//remove element from array if found duplicate

const users = ['hari', 'shyam', 'hari'];
let tempArr = [];
users.map((item) => {
    if (!tempArr.includes(item)) {
        tempArr.push(item);//pushes item to tempArr if the item is not in tempArr

    }
})
console.log(tempArr);

//Another way of solving the above problem is with the use of arr.filter

const uniqueUser = users.filter((item, index) => users.indexOf(item) === index);
console.log(uniqueUser)


//Q5
//calculate the sum of all the odd numbers inside this nested array
//Output= 24
const newArr = [
    [4, 5],
    [5, 7],
    [7, 2],
];

//using map method()
let sumArr = 0;
newArr.map((item) => {
    item.map((item2) => {
        if (item2 % 2 !== 0) {
            sumArr += item2;
        }
    });
});
console.log(sumArr)

//using for loop method
let sum1 = 0;
for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1; j++) {

        if (newArr[i][j] % 2 != 0) {
            sum1 += newArr[i][j];
        }
    }
}
console.log(sum1)

//Q6
// return only array of ids: expected output  [3,5,6]

const myDetails = [
    { id: 3, name: 'hari' },
    { id: 5, name: 'shyam' },
    { id: 6, name: 'gopal' },
  ];
  
//using .map()
  const myDetailsId = myDetails.map((item, id) => {
    return item.id;
  });
  console.log(myDetailsId);
  