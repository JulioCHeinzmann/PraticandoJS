let products = [
  {name:'caneta', value:2.30, quantity:3}, 
  {name:'caderno', value:13.40, quantity:2}, 
  {name:'borracha', value:1.2, quantity:5}
]

let total = products.reduce(getTotal, 0);
function getTotal(total, item) {
 return total + (item.value * item.quantity);
}

let soma = total;
console.log(total);

