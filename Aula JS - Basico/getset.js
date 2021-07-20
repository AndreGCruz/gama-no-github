class Person {
  constructor(name){
    this._name = name  // Torna o atributo privado
  }

  get name(){      //get pega um atributo privado
    return this._name;
  }

  set name(value){  // Permite fazer alteraçoes ao atributo
    this._name= value;
  }
}

// get e set precisam estar dentro da classe

let person1 = new Person ("Ander")
console.log(person1.name)    // Sem o get, esse resultado seria indefinido, pq a propriedade está "privada"
// Com o get ele plota o nome certinho

let person2 = new Person ("jose")
person2.name = "jorge"    // Sem o set, eu nao consigo trocar o atributo name e o programa tem como saída jose
console.log(person2.name)

