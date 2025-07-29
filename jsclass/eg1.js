class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
let person1 = new Person("John", 30);
person1.sayHello(); // Hello, I'm John and I'm 30 years old.