const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a,b){return a-b}));

const arrayPessoas = [
    {name: "Joao", age: 25},
    {name: "Andre", age: 27},
    {name: "Bela", age: 20},
]

const ordemCorretaNomes = arrayPessoas.sort((pessoaA,pessoaB)=>{  // Estou classificando as pessoas em ordem alfabetica pelo nome
    if(pessoaA.name>pessoaB.name){
        return 1
    }
    if(pessoaA.name<pessoaB.name){
        return -1
    }
    return 0
})

const ordemCorretaIdades = arrayPessoas.sort((idadeA,idadeB)=>{  // Estou classificando as pessoas em ordem alfabetica pelo nome
    if(idadeA.age-idadeB.age>0){    // Preciso especificar sobre qual objeto eu quero a ordem, pq a array tem nome e idade
        return 1
    }
    if(idadeA.age-idadeB.age<0){
        return -1
    }
    return 0
})
console.log(ordemCorretaNomes)
console.log(ordemCorretaIdades)