const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
    location: {
      lat: 40.7128,
      lng: -74.0060
    }
  }

};
const indent = "";

function printObject(obj,indent) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      console.log( indent + key + ":");
      printObject(obj[key], indent + "  ");  // Gọi lại chính hàm đó với cấp indent sâu hơn
    } else {
      console.log( indent + key + ": " + obj[key]);
    }
  }
}

printObject(person,indent);
