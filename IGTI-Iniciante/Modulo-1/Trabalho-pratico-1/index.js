var numeros = [977];
for (var i = 0; i <1000; i++){

    while (i <numeros.length){
        var num = numeros [i];
        i++;
    }

 if ((num % 2 === 0) || (num % 3 === 0) || (num % 4 === 0) || (num% 5 === 0) || (num% 6 === 0) || (num% 7 === 0)){
    console.log( num + " não é primo ");
    break
} else{
    console.log(num + " é primo ");
    break
    }
}








    















