const person = {
  fname: "John",      // Thuộc tính dạng string
  lname: "Doe",       // Thuộc tính dạng string
  age: 25,            // Thuộc tính dạng number
  address: {          // Thuộc tính dạng object (object lồng nhau)
    city: "New York", // Thuộc tính con của address
    zip: "10001"      // Thuộc tính con của address
  }
};

for (let key in person) {    //Duyệt qua từng key (property name) trong đối tượng person. Các giá trị của key sẽ lần lượt là: "fname", "lname", "age", "address"
  if (typeof person[key] === "object") { /*Kiểm tra kiểu dữ liệu với typeof: 
if (typeof person[key] === "object") {
  ...
} else {
  ...
}

*/
    console.log(key + ": ");
    for (let subKey in person[key]) { //Vòng lặp con (nested loop):
      console.log("  " + subKey + ": " + person[key][subKey]);
    }
  } else {
    console.log(key + ": " + person[key]);
  }
}