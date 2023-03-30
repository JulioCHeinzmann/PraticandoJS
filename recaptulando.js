const paymentRent = [
  {name:'house70', value:650, quantity:10},
  {name:'house110', value:820, quantity:7},
  {name:'ap75', value:550, quantity:12},
  {name:'ap90', value:750, quantity:16}
]

function calculateTotal(paymentRent) {
  let total = 0;

  for(let i=0; i < paymentRent.length; i++) {
      let payment = paymentRent[i];
      let paymentTotal = payment.value * payment.quantity;
      total += paymentTotal;
  }
  return total;
}

let totalPayment = calculateTotal(paymentRent);
console.log("O total adquirido com os apartamentos alugados é " + totalPayment + " reais");

const officeCosts = [
  {name:'generalCosts', value:1650}, 
  {name:'salaryCosts', value:25000},
  {name:'equipmentCosts', value:2500}
]

function calculateCosts(officeCosts){
  let total = 0;

  for(let i=0; i < officeCosts.length; i++) {
      let costs = officeCosts[i];
      let totalCosts = costs.value;
      total += totalCosts;
  }
  return total;
}
let allCosts = calculateCosts(officeCosts);
console.log("O total gasto com as despesas da imobiliaria é "+ allCosts + " reais");

// reserva
let persentageReserve = .075
let emergencyReserve = (persentageReserve*totalPayment)
console.log("O total da reserva de emergencia é "+ emergencyReserve + " reais");

const balanceEarnigs = [
  {name:'paymentRent', value:totalPayment},
  {name:'officeCosts', value:allCosts},
  {name:'emergencyReserve', value:emergencyReserve}
]

function earningDifference(balanceEarnigs){
  let total = 0;

  for(let i=0; i < balanceEarnigs.length; i++){
      let earnings = balanceEarnigs[0].value;
      let costs = balanceEarnigs[1].value + balanceEarnigs[2].value;
      total = earnings - costs;
    }
    return total;
}
let diffEarnings = earningDifference(balanceEarnigs);
console.log("A imobiliaria tem um prejuizo de "+ diffEarnings + " reais");

// reserva em caso de prejuizo
let persentageReserveAlert = .0375
let emergencyReserveAlert = (persentageReserveAlert*totalPayment)
console.log("O total da reserva de emergencia em caso de prejuizo é de "+ emergencyReserveAlert + " reais");

// como ouve um prejuizo de 533,5 no mes, uma medida de emergencia foi tomada
balanceEarnigs.push({name: 'alerteEmergencyReserve', value: emergencyReserveAlert,});

//logo devera ser feito um nova verificacao de ganhos da empresa
function newEarningDifference(balanceEarnigs){
  let total = 0;

  for(let i=0; i < balanceEarnigs.length; i++){
      let earnings = balanceEarnigs[0].value;
      let costs = balanceEarnigs[1].value + balanceEarnigs[3].value;
      total = earnings - costs;
    }
    return total;
}
let newDiffEarnings = newEarningDifference(balanceEarnigs);
console.log("A imobiliaria tem um lucro de "+ newDiffEarnings + " reais");

//Com novas residencias alugadas os lucro aumentou, logo:
paymentRent[0].quantity += 1;
paymentRent[1].quantity += 1;
paymentRent[2].quantity += 1;
paymentRent[3].quantity += 1;

// com o novo locro da empresa se fez necessario calcular o total de gastos para que se possa verificar os futuros ganhos da empresa

let newTotalPayment = calculateTotal(paymentRent);
console.log("O total atualizado adquirido com os apartamentos alugados é " + newTotalPayment + " reais");

const totalCosts = [
  {name:'allOfficeCosts', value:allCosts},
  {name:'emergencyReserve', value:persentageReserve*newTotalPayment}
]

function calculateTotalCosts(totalCosts){
  let total = 0;
  
  for(let i=0; i < totalCosts.length; i++){
      let costs = totalCosts[i];
      let allCosts = costs.value;
      total += allCosts
  }
  return total;
}
let newCosts = calculateTotalCosts(totalCosts);
console.log("O total atualizado de gastos é " + newCosts + " reais");

//com o novo lucro da empresa, nao se ve necessidade de usar o alerta para a reserva de emergencia, assim, devera ser feito uma nova verificao de ganhos da empresa

    function updatedEarnings(newTotalPayment,newCosts){
      let total = 0;
          let earnings = newTotalPayment;
          let costs = newCosts;
          total += costs - earnings;
          return total;
    }
    let newTotalUpdateEarning = updatedEarnings(newCosts,newTotalPayment);
    console.log("O lucro geral total atualizado é de  " + newTotalUpdateEarning + " reais");


















  
