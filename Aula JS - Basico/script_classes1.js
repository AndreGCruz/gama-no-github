class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
 
 console.log("My car is " + myCar.age() + " years old.") ;

class CarColour extends Car{
     constructor (name,year,colour){
         super(name,year);
         this.colour = colour
     }
 
     read (){
        return `My car is ${this.name} do ano ${this.year} da cor ${this.colour}`
     }
}

let FordKa = new CarColour ('FordKa1',2010,'verde' );

console.log(FordKa.name)