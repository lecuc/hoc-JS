function map2(){
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + "\n"
})
console.log(text);
}
map2();
//.forEach() là method của Map, nhận vào một hàm callback. Callback này có 2 tham số: value và key
// value là 500, 300, 200