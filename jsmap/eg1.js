function map1(){
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  console.log(fruits.get('apples')); // 500
}
map1();
 
function map2(){
  const fruits = new Map();

  // Đúng cú pháp: key, value
  fruits.set("applese", 200);
  fruits.set("bana", 100); // ghi đè giá trị của key "applese"

  console.log(fruits); 
}
map2();