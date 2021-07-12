

function fizzBuzz(entrada){

  if (typeof entrada !== "number"){   // Usei dois iguais no caso de entrarem com um array ou objeto. "number" é uma string
    return 'Não é um numero'
  }

  else if (entrada%3 == 0 && entrada%5 != 0){
    return 'Fizz'
  }

  else if (entrada%5 == 0 && entrada%3 != 0){
    return 'Buzz'
  }

  else if (entrada%5 == 0 && entrada%3 == 0){
    return 'FizzBuzz'
  }

  else if (entrada%5 != 0 && entrada%3 != 0){
    return entrada
  }  
}
let resultado = fizzBuzz(15)
console.log(resultado)

// Se eu colocasse  primeiro a verificação de ser divisível por 3 e por 5. 
// Nas próximas eu só precisaria ter colocado %3 e por %5, nao precisaria ter colocado o diferente.