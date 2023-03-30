var paymentRent = [
  {name:'house70', value:650, quantity:10}, 
  {name:'house110', value:820, quantity:7}, 
  {name:'ap75', value:550, quantity:12},
  {name:'ap90', value:750, quantity:16}
]

function calculateTotal(paymentRent){
  let total = 0;

  for (let i = 0; i < paymentRent.length; i++) {
      let payment = paymentRent[i];
      let paymentTotal = payment.value * payment.quantity;
      total += paymentTotal;
  }
  return total;
}

let totalPayment = calculateTotal(paymentRent);
console.log(totalPayment);

var officeCosts = [
  {name: 'generalCosts', value: 1650, quantity:1},
  {name: 'salaryCosts', value: 25000, quantity:1},
  {name: 'equipmentCosts', value: 2500, quantity:1},
]

function calculateCosts(officeCosts){
  let total = 0;

  for (let i = 0; i < officeCosts.length; i++) {
    let costs = officeCosts[i];
    let totalCosts = costs.value * costs.quantity;
    total += totalCosts;
  }
  return total;
}

let costsTotal = calculateCosts(officeCosts);
console.log(costsTotal);


