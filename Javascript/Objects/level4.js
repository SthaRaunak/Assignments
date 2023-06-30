const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score

let sum = 0;

objValues = Object.values(obj);

objValues.map((item) => {
    sum = sum + item;
})
let percent = (sum * 100 / 150).toFixed(2) + "%";
console.log(percent);



//Generate the given output
// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }

const userDetails = {
    name: 'kaylin',
    maths: 23,
    science: 35,
    gk: 30,
};

// answer
let subjectCodes = [];

const subject = Object.keys(userDetails);
subject.forEach((item) => {
    if (item != 'name') {
        subjectCodes.push(item.charAt(0).toUpperCase());
    }
});

const object = {
    userName: userDetails.name,
    subjectCodes,
    subjectScores: Object.values(userDetails).filter(Number),
};
console.log(object)
