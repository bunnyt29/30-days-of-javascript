// syntax
class ClassName {
    //  code goes here
}

class Person {
    // code goes here
  }
const person = new Person()
console.log(person)

class Person1 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
const person1 = new Person('Asabeneh', 'Yetayeh')  
console.log(person1)

class Person2 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person2 = new Person2('Asabeneh', 'Yetayeh')
  const person3 = new Person2('Lidiya', 'Tekle')
  const person4 = new Person2('Tania', 'Bojkova')
  
  console.log(person4)
  console.log(person2)
  console.log(person3)


  class Person3 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person5 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person6 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1.getFullName())
  console.log(person2.getFullName())