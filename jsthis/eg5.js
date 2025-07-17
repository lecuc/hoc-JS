const person = { name: "Charlie" };
function sayHello() {
  console.log(this.name);
}
sayHello.call(person);  // 👉 Charlie
sayHello.apply(person); // 👉 Charlie
const bound = sayHello.bind(person);
bound(); // 👉 Charlie
