const listContainer = document.querySelector('[data-lists]') // As tarefas ja adicionadas, está dentro da div
const newListForm = document.querySelector('[data-new-list-form]') // O form em sim
const newListInput = document.querySelector('[data-new-list-input]') // O input dentro do form

// querySelector retorna o primeiro elemento no documento que corrresponde ao seletor

let lists = ['Name']


// newListForm.addEventListener('submit',function(e){   //O evento ocorre quando o form é submetido
//     e.preventDefault() // Previne que seja atualizado automaticamente
//     const listName = newListInput.value  // Guardar o valor do Input
//     if (listName ===null || listName === '') return // Se a lista tiver nula ou (||) vazia, o algoritmo não vai retornar nada
//     const list = createList(listName) // o return do if não precisa de chaves?
//     newListInput.value = null // a função createList vai ser definida depois // Toda vez que o item for adicionado a lista, quero limpar o meu input (null)
//     lists.push(list)  //push inclui o item no final do array
//     render()  //ainda vai ser criada
// })

function render(){  //função que vai mostrar os itens na tela
    lists.forEach(function(list){      // Cria a lista e joga no HTML
      const item = document.createElement('li')  //li é um elemento de uma lista no HTML
      item.classList.add('item')
      item.innerText = list
      listContainer.appendChild (item)   //list container é a data-list do html que foi chamada lá em cima aqui no JS
    })
}

render()