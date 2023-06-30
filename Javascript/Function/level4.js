//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600

const rideDetails = {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30,
};

let TotalPrice;
function calcPrice(dist, unitPrice) {
    TotalPrice = parseInt(dist) * unitPrice;
    return TotalPrice;
}
calcPrice(rideDetails.distance, rideDetails.unitKmPrice);
console.log(TotalPrice);

//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=(status)=>{
if(status.status == 'success')
{
    return true;
}
else
{
    return false;
}
}

checkIfSucces(status1)  //should return false

checkIfSucces(status2)  //should return true