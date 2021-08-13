let numeros = [ 1,2,3,4,5,6,7,8,9]

let total_impares = 0
let total_pares = 0

contador = 0

while(contador < numeros.length){

    if(numeros[contador] % 2 ==0){
        total_pares ++
       
    }else {
        total_impares ++
    }
    
    contador ++
}
