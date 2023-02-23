//factorial-break.js
/* Este archivo debe calcular el factorial de 10 utilizando un bucle while,
una bifurcación if y una sentencia break*/
let totalC = 1;
a = 1;
bucleNumero1: while(a <= 100){
    totalC = totalC*a;a++;
    if(a===11){break bucleNumero1}

}

console.log(totalC);
