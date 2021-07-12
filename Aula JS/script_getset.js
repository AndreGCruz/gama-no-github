class Person {
  constructor(name){
    this._name = name
  }

  get name(){
    return this._name;
  }

  set name(value){
    this._name= value;
  }
}

let person1 = new Person ("Ander")
person1.name = 'jose'
console.log(person1.name)

