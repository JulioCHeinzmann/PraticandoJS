/**
 * O uso de operações básicas da Matemática é algo corriqueiro em diversos setores do mercado, sendo que o conhecimento e a prática de tais operações são requisitos mínimos para diversos cargos.

Considere que você é contratado(a) para trabalhar como auxiliar financeiro em uma pequena empresa no ramo imobiliário. Em seu primeiro dia, seu supervisor fornece as seguintes informações sobre as finanças do empreendimento: 

* a imobiliária possui 15 casas de 70 m2, 10 casas de 110 m2, 15 apartamentos de 65 m2 e 20 apartamentos de 90 m2 para alugar. 

* o preço do aluguel depende do tamanho do imóvel: R$ 650,00 para casas de 70 m2, R$ 820,00 para casas de 110 m2, R$ 550,00 para apartamentos de 65 m2 e R$ 750,00 para apartamentos de 90 m2 para alugar. 

* os custos de aluguel de espaço, eletricidade e água da empresa giram em torno de R$ 1.650,00 mensais. 

* o custo com salários dos funcionários é de R$ 25.000,00. 

* o custo com equipamentos de escritório é de R$ 2.500,00, considerando compra de papéis e canetas, reciclagem, manutenção de softwares e dos computadores. 

* ao fechamento do mês, 7,5% do total de dinheiro recebido dos aluguéis da imobiliária devem ir para uma reserva de capital para emergências. 

No mês em que você iniciou os trabalhos, a imobiliária possuía 10 casas de 70 m2, 7 casas de 110 m2, 12 apartamentos de 65 m2 e 16 apartamentos de 90 m2 alugados.

Responda as seguintes perguntas e apresente os devidos cálculos para sua validação.

- Seu supervisor, então, pergunta: a imobiliária apresentará lucro ou prejuízo no fechamento do mês atual? NAO

- Em caso de prejuízo, caso a reserva de capital realizada no presente mês seja metade do previsto, é possível fechar o mês com lucro? [SIM, 2313/2-31463=30.306,5 lucro de 533,5]

- E se, no próximo mês, a imobiliária conseguir que mais um de cada imóvel disponível seja alugado, sem que nenhum tenha término de contrato, qual será a situação da empresa, considerando que a reserva de capital seja indispensável? lucro de 1.935,25 mesmo com os 7,5% da emergencia.
 */


//casas70 = 10
//casas110 = 7
//ap65 = 12
//ap90 = 16

    function somaAluguel(alguel70, aluguel110, aluguel65, aluguel90){

    var alguel70 = alguel70;
    var aluguel110 = aluguel110;
    var aluguel65 = aluguel65;
    var aluguel90 = aluguel90;

    
    let totalAluguel = parseFloat(alguel70) + parseFloat(aluguel110) + parseFloat(aluguel65) + parseFloat (aluguel90);
    return totalAluguel;

    
}
let resultadoAluguel = somaAluguel(6500, 5740, 6600, 12000);
console.log("O total adquirido com os apartamentos alugados é "+resultadoAluguel);
let resultadoAluguelAtualizado = somaAluguel(6500 + 650, 5740 + 820, 6600 + 550, 12000 + 750);
console.log("O total atualizado adquirido com os apartamentos alugados é "+resultadoAluguelAtualizado);



function somaDespesas(reserva,alguel70, aluguel110, aluguel65, aluguel90){
    const totalAluguel = somaAluguel(alguel70, aluguel110, aluguel65, aluguel90);

    var aluguelEspaco = 1650;
    var salarios = 25000;
    var equipamentos = 2500;
    var reservaEmergencia = totalAluguel * reserva

    let totalDespesas = parseFloat(aluguelEspaco) + parseFloat(salarios) + parseFloat(equipamentos) + parseFloat (reservaEmergencia);
    return totalDespesas;

}
let resultadoDespesas = somaDespesas(.075, 6500, 5740, 6600, 12000 );
console.log("O total gasto com as despesas da imobiliaria é "+resultadoDespesas);

function balancoDeCapital(reserva, alguel70, aluguel110, aluguel65, aluguel90){
    let ganhos = somaAluguel(alguel70, aluguel110, aluguel65, aluguel90);
    let despesas = somaDespesas(reserva, alguel70, aluguel110, aluguel65, aluguel90);
    if(ganhos < despesas){
        return `prejuizo de: ${ganhos - despesas}`
    } else {
        return `lucro de: ${ganhos - despesas}`
    }
}
let balancoDeLucro = balancoDeCapital(.075, 6500, 5740, 6600, 12000);
console.log(balancoDeLucro);

let balancoDeLucroCorteDeReserva = balancoDeCapital(.0375, 6500, 5740, 6600, 12000)
console.log(balancoDeLucroCorteDeReserva);

let balancoDeLucroAtualizado = balancoDeCapital(.075, 6500 + 650, 5740 + 820, 6600 + 550, 12000 + 750);
console.log(balancoDeLucroAtualizado);





