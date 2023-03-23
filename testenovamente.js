let array = [10,20,30,40]

function calculaMedia(parametro){
let soma = 0;    
    for(let i=0; i < parametro.length;i++){
    soma = soma + parametro[i];
}
let resultado = soma / parametro.length;
console.log(resultado);

}

calculaMedia(array);


