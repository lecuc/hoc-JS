/*let a = 3 , b = 5;
let myfunction = () => a * b;
console.log(myfunction()); 


let myfunction = (a, b) => a * b;
let a = 3, b = 5;
console.log(myfunction(a, b));


let myfunction = (a, b) => a * b;
console.log(myfunction(4, 4));

let hello = "";

hello = function() {
  return "Hello World!";
}
console.log(hello());


let hello = "";

hello = () => "Hello World!";
console.log(hello());
*/
let hello = "";

hello = (val) => "Hello " + val;  //Arrow Function With Parameters:
console.log(hello( 1));
//Việc gán biến kiểu chuỗi rồi gán thành hàm là hợp lệ trong JavaScript, vì biến let có thể thay đổi kiểu giá trị (dynamic typing).