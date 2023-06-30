//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['hari','shyam','thakur']

if(allUsers.includes(name)){
    console.log('name is found')
}
else{
    console.log('name is not found')
}

//Q2 find number of duplicates
//expected output is: 2
//true

const user = 'hari';
const userArr = ['hari','shyam','hari','thakur'];

let count = 0;
userArr.map((item)=>{
    if(item == user)
    {
        count++;
    }
})

console.log(count);