//this trong một đối tượng (object method)
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // this -> person
  }
};
person.greet(); // 👉 Alice
