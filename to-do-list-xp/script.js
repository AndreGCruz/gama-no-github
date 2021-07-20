// Essa primeira parte é capturar os elementos do HTML e jogar para o JS

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit',function(e){   //O evento ocorre quando o form é submetido
    e.preventDefault() // Previne que seja atualizado automaticamente
    const listName = newListInput.value  // Guardar o valor do Input
    if (listName ===null || listName === '') return // Se a lista tiver nula ou (||) vazia, o algoritmo não vai retornar nada
    const list = createList(listName) // o return do if não precisa de chaves?
    newListInput.value = null // a função createList vai ser definida depois
    lists.push(list)
    render() 
})

// list é cada item dentro do array lists

// Aqui estamos retornando os dados do JS para o HTML

function render(){ //função que vai mostrar os itens na tela
    clearElement(listContainer)  
    lists.forEach(function(list){      // Cria a lista e joga no HTML
      const item = document.createElement('li')  //li é um elemento de uma lista no HTML
      item.classList.add('item')
      item.innerText = list.name  // o parametro list passou dentro da funçao create list, entao ele tem um id e um name
      listContainer.appendChild (item)   //list container é a data-list do html que foi chamada lá em cima aqui no JS
    })
}

function createList(name){ // Fazer com que cada item digitado entre no final do array
  return{id: Date.now().toString(), name: name}     // Cada item da nossa array lists, tem uma id e um name, estamos criando nossa id a partir do horario atual (Date.now)
}

function clearElement(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
}

// Continuar quando entender mais métodos de javascript
