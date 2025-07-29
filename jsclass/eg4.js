class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 🧠 Gọi constructor của Animal
    this.breed = breed; // thêm thuộc tính riêng
  }

  speak() {
    console.log(`${this.name} the ${this.breed} barks.`);
  }
}

const dog = new Dog("Buddy", "Labrador");
dog.speak(); // 👉 Buddy the Labrador barks.