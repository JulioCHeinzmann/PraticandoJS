let array = [1,5,15,34,12,48,67,1,2,6,46];

function maiorValor(listaDeNumeros){ 
    let maiorNumeroDaLista = 0; 
    for(let i=0; i < listaDeNumeros.length;i++){ 
        let numeroDeComparacaoAtual = listaDeNumeros[i]
        if(numeroDeComparacaoAtual > maiorNumeroDaLista ){ 
            maiorNumeroDaLista = numeroDeComparacaoAtual 
        }
    }
    return maiorNumeroDaLista;
}
let resultadoDoMaiorValor = maiorValor(array);
console.log("O resultado da primeira funcao: " + resultadoDoMaiorValor);


let array2 = [1,5,10,6,5,3];

function verificaSeExisteNumeroRepetido(listaDeNumeros){ 
    let existeNumeroRepetido = false; 
    for(let i=0; i < listaDeNumeros.length; i++){ 
        for(let j=i+1; j < listaDeNumeros.length; j++){ 
            if(listaDeNumeros[i] === listaDeNumeros[j]){ 
                existeNumeroRepetido = true; 
            }
        }
    }
    return existeNumeroRepetido;
}
let resultadoSeExisteNumeroRepetido = verificaSeExisteNumeroRepetido(array2);
console.log("o resultado da segunda funcao: " + resultadoSeExisteNumeroRepetido);

function verificaERetornaNumeroRepetido(listaDeNumeros){     
    let numeroRepetido = -1; 
    for(let i=0; i < listaDeNumeros.length; i++){ 
        for(let j=i+1; j < listaDeNumeros.length; j++){ 
            if(listaDeNumeros[i] === listaDeNumeros[j]){  
                numeroRepetido = listaDeNumeros[j];
                break;
            }
        }
    }
    return numeroRepetido;
}
let resultadoDoNumeroRepetido = verificaERetornaNumeroRepetido(array2);
console.log("o resultado da terceira funcao: " + resultadoDoNumeroRepetido);


let array3 = ["Julio", "Guilherme", "Leonardo", "Matheus", "Fabiano", "Joao"] 

function verificadorDeNomes(listaDeNomes){ 
    let nome = listaDeNomes[0]
    for(let i=0; i < listaDeNomes.length;i++){ 
        if(listaDeNomes[i].length < nome.length){ 
            nome = listaDeNomes[i];
        }
    
    }

    return nome;
}
let resultadoDoMenorNome = verificadorDeNomes(array3);
console.log("o resultado da quarta funcao: " + resultadoDoMenorNome);




