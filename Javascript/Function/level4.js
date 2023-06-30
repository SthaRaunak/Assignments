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