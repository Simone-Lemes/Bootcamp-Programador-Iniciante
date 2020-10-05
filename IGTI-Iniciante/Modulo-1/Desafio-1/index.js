const fs = require("fs");
function lerArquivo(arquivo){
    let result= fs.readFileSync(arquivo,"utf-8")
    return JSON.parse(result);
}
function separaArray(){
    let data = lerArquivo("./funcionarios.json");
    let array = data.funcionarios;
    return array;
}
function ordenaMaiorSalario(array){
    return array.sort(function(a, b){
        return b.salario - a.salario;
    })
        
}
function ordenaMenorSalario(array){
    return array.sort(function(a, b){
        return a.salario - b.salario;
    })
        
}
function mediaSalarial(array){
    let somaSalarios = 0;
    let mediaSalarial = 0;
    for(let i=0; i <= array.length-1; i++){
        somaSalarios += array[i].salario;
    }
    mediaSalarial = somaSalarios/array.length
    return mediaSalarial.toFixed(2)
}

function maiorSalarioSetor(array,setor){
    let arraySetor = [];
    for(let i=0; i <= array.length-1; i++){
        if(array[i].setor===setor){
            arraySetor.push(array[i]);
        }
    }
    return ordenaMaiorSalario(arraySetor);
    
}
function menorSalarioSetor(array,setor){
    let arraySetor = [];
    for(let i=0; i <= array.length-1; i++){
        if(array[i].setor===setor){
            arraySetor.push(array[i]);
        }
    }
    return ordenaMenorSalario(arraySetor);
    
}
function mediaSalarioSetor(array,setor){
    let arraySetor = [];
    for(let i=0; i <= array.length-1; i++){
        if(array[i].setor===setor){
            arraySetor.push(array[i]);
        }
    }
    return mediaSalarial(arraySetor);
    
}


console.log(ordenaMaiorSalario(separaArray())[0].nome);
console.log(ordenaMenorSalario(separaArray())[0].nome);
console.log(mediaSalarial(separaArray()));
console.log(maiorSalarioSetor(separaArray(),"Comercial")[0]);
console.log(menorSalarioSetor(separaArray(),"Comercial")[0]);
console.log(mediaSalarioSetor(separaArray(),"Administrativo"));