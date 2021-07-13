const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = ['Name','To_do']

newListForm.addEventListener('submit',function(e){
    e.preventDefault() // Previne que seja atualizado automaticamente
    const listName = newListInput.value  // Guardar o valor do Input
    if (listName ===null || listName === '') return // Se a lista tiver nula ou vazia, o algoritmo não vai retornar nada
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render() 
})

function render(){
    lists.forEach(function(list){      // Cria a lista e joga no HTML
      const item = document.createElement('li')
      item.classList.add('item')
      item.innerText = list
      listContainer.appendChild (item)  
    })
}

function createList(name){

}

render()

// Continuar quando entender mais métodos de javascript
