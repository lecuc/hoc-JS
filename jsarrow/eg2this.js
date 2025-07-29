function Person(name) {
  this.name = name;
  setTimeout(() => {
    console.log("Hello, my name is " + this.name);
  }, 1000);
}
new Person("Bob");
//→ Vì arrow function kế thừa this từ Person, nên dùng được this.name.