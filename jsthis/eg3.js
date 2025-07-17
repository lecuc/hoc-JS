//this trong hàm arrow (arrow function)
const person = {
  name: "Bob",
  greet: () => {
    console.log(this.name);
  }
};
person.greet(); // 👉 undefined (hoặc window.name nếu có)
