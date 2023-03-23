let array = [0,1,2,3]

function calculaMedia(parametro){ // criando a funcao;
let soma = 0; // variavel de soma
 for(let A = 0; A < parametro.length; A++) { //loop para calcular o conteudo da array;
    soma = soma + parametro[A]; // soma dos conteudo da array;
    
 }
 let resultado = soma / parametro.length; // variavel responsavel por calcular a media;
 console.log(resultado);
}

calculaMedia(array) // funcao executada;
//module.exports = calculaMedia; feito para exportar para outro arquivo; 

calculaMedia([1,2,3,4,5]); // posso chamar funcao varias vezes com valores diferentes;



