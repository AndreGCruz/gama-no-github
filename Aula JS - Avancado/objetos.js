const Bela = {
    nome: "Isabela",
    caracteristica: "Tranquilona"

}

console.log(Bela.nome)
console.log(Bela["caracteristica"])

const {nome,caracteristica} = Bela //destructing, ajuda pra que?

console.log(nome)

const filmes = [
{
    id: 1,
    Titulo: "Viagem para o futuro",
    Ano: 1968
},
{
    id: 2,
    Titulo: "Esqueceram de mim",
    Ano: 1999
},
{
    id: 3,
    Titulo: "Contratiempo",
    Ano: 2014
},
]

const [{id,Titulo,ano}] = filmes
console.log(id)

filmes.map(filme => console.log(filme.Titulo)) // filme é a callback function

// o .maps chamou a função filme em cada elemento da array, por isso retornou os 3 filmes
