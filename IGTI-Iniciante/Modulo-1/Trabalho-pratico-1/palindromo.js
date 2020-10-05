//arara
//ana

//carro
//orrac

var palavra = "carro";
var palavraInvertida = "";

/*for (var i = 0; i < palavra.length; i++) {
    palavraInvertida = palavraInvertida + palavra[i];
}*/

/*
0 1 2 3 4 5
c a r r o 
*/

for (var i = palavra.length - 1; i >= 0; i--) {
    //palavraInvertida = palavraInvertida + palavra[i];
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    console.log(palavra + " é palíndromo.");
} else {
    console.log(palavra + " não é palíndromo.");
}

/*console.log(palavra[0]);
console.log(palavra[1]);
console.log(palavra[2]);
console.log(palavra[3]);
console.log(palavra[4]);*/