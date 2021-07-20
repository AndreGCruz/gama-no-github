//reverse a string

let newStr = '';


function reverseAString(str){

  while (newStr.length < str.length) {
    newStr = newStr + str[str.length - newStr.length-1]
    // Se não colocar o -1, dá undefined pq o lenght obtido é maior que o tamanho de str
  }
  console.log(newStr)
}

let resultado = reverseAString('celular prepago')


